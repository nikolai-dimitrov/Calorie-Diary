const Profile = require("../models/Profile");
const CustomError = require("../utils/CustomError");
const { calculateBmr } = require("../helpers/calculateBmr");
const profileValidators = require("../validators/profileValidators");

// User cannot create two different body goals in same day -> only the last one created remains
const removeTodayCreatedGoals = async (profile) => {
	const today = new Date().toDateString();
	const lastBodyGoalDate = profile.bodyGoalHistory
		.at(-1)
		.createdAt.toDateString();

	if (today == lastBodyGoalDate) {
		profile.bodyGoalHistory.pop();
		await profile.save();
	}
};

// If user change current or target weight -> update current body goal in bodyGoalHistory with new values
const updateCurrentBodyGoal = async (updatedProfile) => {
	const currentBodyGoal = updatedProfile.bodyGoalHistory.at(-1);
	currentBodyGoal.currentWeight = updatedProfile.currentWeight;
	currentBodyGoal.targetWeight = updatedProfile.targetWeight;
	await updatedProfile.save();
};

// Add new bodyGoal to the history
const updateBodyGoalHistory = async (profile, newProfileData) => {
	profile.bodyGoalHistory.push({
		goal: newProfileData.bodyGoal,
		startWeight: newProfileData.currentWeight,
		currentWeight: newProfileData.currentWeight,
		targetWeight: newProfileData.targetWeight,
	});

	await profile.save();
};

// If user change body goal we add new body goal to the bodyGoalHistory
const handleBodyGoalChange = async (
	currentProfile,
	updatedProfile,
	newProfileData
) => {
	if (currentProfile.bodyGoal != newProfileData.bodyGoal) {
		//If there is other body goal in bodyGoalHistory created today -> remove it
		await removeTodayCreatedGoals(updatedProfile);

		const lastBodyGoal = updatedProfile.bodyGoalHistory.at(-1)?.goal;
		// After removing today created body goal if any ,compare last body goal in history with current
		if (lastBodyGoal != newProfileData.bodyGoal) {
			await updateBodyGoalHistory(updatedProfile, newProfileData);
		}
	}
};

// If profile weights are changed -> update current body goal in bodyGoalHistory
const handleWeightChange = async (currentProfile, updatedProfile) => {
	if (
		currentProfile.currentWeight != updatedProfile.currentWeight ||
		currentProfile.targetWeight != updatedProfile.targetWeight
	) {
		await updateCurrentBodyGoal(updatedProfile);
	}
};

exports.getProfile = async (userId) => {
	const profile = await Profile.findOne({ owner: userId });
	if (!profile) {
		throw new CustomError(404, "You have't created profile yet");
	}

	profile.bodyGoalHistory = profile.bodyGoalHistory.sort(
		(a, b) => a.createdAt - b.createdAt
	);
	return profile;
};

exports.createProfile = async (profileData) => {
	const profileExists = await Profile.findOne({ owner: profileData.owner });
	if (profileExists) {
		throw new CustomError(409, "You already have profile");
	}

	profileValidators.validateWeightFields(profileData);

	bmr = calculateBmr(profileData);
	profileData.bmr = bmr;

	const profile = await Profile.create(profileData);
	return profile;
};

exports.updateProfile = async (newProfileData) => {
	const currentProfile = await Profile.findOne({
		owner: newProfileData.owner,
	});

	if (!currentProfile) {
		throw new CustomError(404, "You have't created profile yet");
	}

	profileValidators.validateWeightFields(newProfileData);

	// Calc bmr again because of changes in weight age or height
	const bmr = calculateBmr(newProfileData);
	newProfileData.bmr = bmr;

	const updatedProfile = await Profile.findOneAndUpdate(
		{
			owner: newProfileData.owner,
		},
		newProfileData,
		{ runValidators: true, new: true }
	);

	await handleBodyGoalChange(currentProfile, updatedProfile, newProfileData);
	await handleWeightChange(currentProfile, updatedProfile, newProfileData);

	return updatedProfile;
};
