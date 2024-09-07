const { getProfile } = require("../services/profileService");
const getUserProfile = async (userId) => {
	return await getProfile(userId);
};
module.exports = getUserProfile;
