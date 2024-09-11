const Profile = require("../models/Profile");
const CustomError = require("../utils/CustomError");
const { calculateBmr } = require("../helpers/calculateBmr");

const updateBodyGoal = async (
	currentProfile,
	updatedProfile,
	newProfileData
) => {
	// If user update his profile but not his current body goal then do nothing
	if (currentProfile.bodyGoal != newProfileData.bodyGoal) {
		updatedProfile.bodyGoalHistory.push({
			goal: newProfileData.bodyGoal,
		});
		updatedProfile.save();
	}
};

exports.getProfile = async (userId) => {
	const profile = await Profile.findOne({ owner: userId });
	if (!profile) {
		throw new CustomError(404, "You have't created profile yet");
	}

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
	
      // If user provide different body goal than current body goal new goal is added in to the profile
	await updateBodyGoal(currentProfile, updatedProfile, newProfileData);
	return updatedProfile;
};
