// For documentation refer to authFormRequirements.js file.
const ageFieldRequirements = {
	isNumberRangeValid: false,
};

const heightFieldRequirements = {
	isNumberRangeValid: false,
};

const currentWeightFieldRequirements = {
	isNumberRangeValid: false,
};

const targetWeightFieldRequirements = {
	isNumberRangeValid: false,
};

const caloriesGoalFieldRequirements = {
	isNumberRangeValid: false,
};

export const requirementsMapper = {
	age: ageFieldRequirements,
	height: heightFieldRequirements,
	currentWeight: currentWeightFieldRequirements,
	targetWeight: targetWeightFieldRequirements,
	caloriesGoal: caloriesGoalFieldRequirements,
};

export const fieldRequirementKeysAndMessages = {
	age: [
        ["isNumberRangeValid", "Enter age between 1 and 100"],
    ],
	height: [
        ["isNumberRangeValid", "Enter height between 100 and 270 cm"],
    ],
	currentWeight: [
		["isNumberRangeValid", "Enter weight between 20 and 300 kg"],
	],
	targetWeight: [
		["isNumberRangeValid", "Enter weight between 20 and 300 kg"],
	],
    caloriesGoal: [
		["isNumberRangeValid", "Enter calories more than 100"],
	],
};
