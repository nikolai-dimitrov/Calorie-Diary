const Profile = require("../models/Profile");
const CustomError = require("../utils/CustomError");
const { calculateBmr } = require("../helpers/calculateBmr");

const updateBodyGoal = async (updatedProfile, newProfileData) => {
	updatedProfile.bodyGoalHistory.push({
		goal: newProfileData.bodyGoal,
	});

	updatedProfile.save();
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
	
	if (currentProfile.bodyGoal != newProfileData.bodyGoal) {
		await updateBodyGoal(updatedProfile, newProfileData);
	}

	return updatedProfile;
};
