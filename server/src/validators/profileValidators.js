const CustomError = require("../utils/CustomError");
exports.validateWeightFields = (profileData) => {
	let { currentWeight, targetWeight, bodyGoal } = profileData;
	currentWeight = Number(currentWeight);
	targetWeight = Number(targetWeight);
	if (bodyGoal == "Lose Weight" && targetWeight > currentWeight) {
		throw new CustomError(
			409,
			"Your target weight should be less than the current weight"
		);
	} else if ((bodyGoal == "Gain Weight") & (targetWeight < currentWeight)) {
		throw new CustomError(
			409,
			"Your target weight should be more than the current weight"
		);
		// TODO: AKO STANE POD ILI NAD DA MY DADE NOTIFIKACIQ CHE GUBI ILI KACHVA TEGLO
	} else if (bodyGoal == "Maintain Weight" && targetWeight != currentWeight) {
		throw new CustomError(
			409,
			"Your target weight should be equal to the current weight"
		);
	}
};
