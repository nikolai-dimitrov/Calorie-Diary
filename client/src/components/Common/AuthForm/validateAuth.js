import { requirementsMapper } from "./authFormRequirements";
export const validateAuth = (event) => {
	const name = event.target.name;
	const value = event.target.value;
	let errors = {
		[name]: [],
	};

	let currentFieldRequirements = {
		[name]: requirementsMapper[name],
	};

	if (name == "email") {
		const regex = /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/;
		const isMatch = value.match(regex);
		if (!isMatch) {
			currentFieldRequirements[name]["isRegexValid"] = false;
			errors.email.push("Please enter valid email.");
		} else {
			currentFieldRequirements[name]["isRegexValid"] = true;
		}
	}

	if (name == "password") {
		const regex = /^[a-zA-Z0-9]+$/;

		const isMatch = value.match(regex);
		if (!isMatch) {
			currentFieldRequirements[name]["isRegexValid"] = false;
			errors.password.push("Only letters and numbers allowed");
		} else {
			currentFieldRequirements[name]["isRegexValid"] = true;
		}
		if (value.length < 6 || value.length > 16) {
			currentFieldRequirements[name]["lengthRangeValid"] = false;
			errors.password.push("Should be between 6 and 16 characters");
		} else {
			currentFieldRequirements[name]["lengthRangeValid"] = true;
		}
	}

	if (name == "repeatPassword") {
		const regex = /^[a-zA-Z0-9]+$/;

		const isMatch = value.match(regex);
		if (!isMatch) {
			errors.repeatPassword.push("Only letters and numbers allowed");
		}
		if (value.length < 6 || value.length > 16) {
			errors.repeatPassword.push("Should be between 6 and 16 characters");
		}
	}

	return { errors, currentFieldRequirements };
};
