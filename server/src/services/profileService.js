const Profile = require("../models/Profile");
const CustomError = require("../utils/CustomError");
const { calculateBmr } = require("../helpers/calculateBmr");

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
	const profileExists = await Profile.findOne({
		owner: newProfileData.owner,
	});

	if (!profileExists) {
		throw new CustomError(404, "You have't created profile yet");
	}

	// Calc bmr again because of changes in weight age or height
	const bmr = calculateBmr(newProfileData);
	newProfileData.bmr = bmr;

	const profile = await Profile.findOneAndUpdate(
		{
			owner: newProfileData.owner,
		},
		newProfileData,
		{ runValidators: true, new: true }
	);

	return profile;
};
