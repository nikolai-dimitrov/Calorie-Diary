const CustomError = require("../utils/CustomError");
exports.validateWeightFields = (profileData) => {
	if (
		profileData.bodyGoal == "Lose Weight" &&
		profileData.targetWeight >= profileData.currentWeight
	) {
		throw new CustomError(
			409,
			"Your target weight should be less than the current weight"
		);
	} else if (
		(profileData.bodyGoal == "Gain Weight") &
		(profileData.targetWeight <= profileData.currentWeight)
	) {
		throw new CustomError(
			409,
			"Your target weight should be more than the current weight"
		);
	} else if (
		profileData.bodyGoal == "Maintain Weight" &&
		profileData.targetWeight != profileData.currentWeight
	) {
		throw new CustomError(
			409,
			"Your target weight should be equal to the current weight"
		);
	}
};
