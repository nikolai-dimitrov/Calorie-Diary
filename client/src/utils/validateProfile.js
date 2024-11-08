import { requirementsMapper } from "../components/Common/ProfileForm/profileFormRequirements";

export const validateProfile = (event) => {
	const name = event.target.name;
	const value = event.target.value;
	let errors = {
		[name]: [],
	};

	let currentFieldRequirements = {
		[name]: requirementsMapper[name],
	};

	if (name == "age") {
		if (value < 1 || value > 100) {
			currentFieldRequirements[name]["isNumberRangeValid"] = false;
			errors[name].push("Age should be between 1 and 100!");
		} else {
			currentFieldRequirements[name]["isNumberRangeValid"] = true;
		}
	}
	if (name == "height") {
		if (value < 100 || value > 270) {
			currentFieldRequirements[name]["isNumberRangeValid"] = false;
			errors[name].push("Height should be between 100 and 270 cm!");
		} else {
			currentFieldRequirements[name]["isNumberRangeValid"] = true;
		}
	}
	if (name == "currentWeight") {
		if (value < 20 || value > 300) {
			currentFieldRequirements[name]["isNumberRangeValid"] = false;
			errors[name].push("Weight should be between 20 and 300 kg!");
		} else {
			currentFieldRequirements[name]["isNumberRangeValid"] = true;
		}
	}
	if (name == "targetWeight") {
		if (value < 20 || value > 300) {
			currentFieldRequirements[name]["isNumberRangeValid"] = false;
			errors[name].push("Target weight should be between 20 and 300 kg!");
		} else {
			currentFieldRequirements[name]["isNumberRangeValid"] = true;
		}
	}
	if (name == "caloriesGoal") {
		if (value < 100) {
			currentFieldRequirements[name]["isNumberRangeValid"] = false;
			errors[name].push("Calories goal should be greater than 100kcal!");
		} else {
			currentFieldRequirements[name]["isNumberRangeValid"] = true;
		}
	}

	return { errors, currentFieldRequirements };
};
