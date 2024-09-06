const Profile = require("../models/Profile");
const CustomError = require("../utils/CustomError");
const { calculateBmr } = require("../utils/calculateBmr");

exports.createProfile = async (profileData) => {
	const profileExists = await Profile.findOne({ owner: profileData.owner });
	if (profileExists) {
		throw new CustomError(409, "You already have profile");
	}

	const bmr = calculateBmr(
		profileData.currentWeight,
		profileData.height,
		profileData.age,
		profileData.gender
	);
	profileData.bmr = bmr;

	const profile = await Profile.create(profileData);
	return profile;
};
exports.editProfile = async (profileData) => {};

exports.getProfile = async (userId) => {
	const profile = await Profile.findOne({ owner: userId });
	if (!profile) {
		throw new CustomError(404, "You have't created profile yet");
	}

	return profile;
};
