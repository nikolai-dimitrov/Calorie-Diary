const { getProfile } = require("../services/profileService");
// If returnBoolean param is true, it doesn't return profile object and doesn't throw an error.
const getUserProfile = async (userId, returnBoolean = false) => {
	if (returnBoolean == true) {
		try {
			await getProfile(userId);
			return true;
		} catch (error) {
			return false;
		}
	}
	return await getProfile(userId);
};
module.exports = getUserProfile;
