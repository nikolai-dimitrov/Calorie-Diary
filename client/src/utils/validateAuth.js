const emailFieldRequirements = {
	isRegexValid: false,
};

const passwordFieldRequirements = {
	lengthRangeValid: false,
	isRegexValid: false,
};

const requirementsMapper = {
	email: emailFieldRequirements,
	password: passwordFieldRequirements,
};

// If event is onBlur -> validate field and return error if there is any
// If event is onChange -> doesn't return errors.It mutates the requirements object if requirement is met and return requirement object.
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
		if (!isMatch && event.type == "blur") {
			errors.email.push("Please enter valid email.");
		}
		if (event.type == "change") {
			isMatch
				? (currentFieldRequirements[name]["isRegexValid"] = true)
				: (currentFieldRequirements[name]["isRegexValid"] = false);
		}
	}

	if (name == "password") {
		const regex = /^[a-zA-Z0-9]+$/;

		const isMatch = value.match(regex);
		if (event.type == "blur") {
			if (!isMatch) {
				errors.password.push("Only letters and numbers allowed");
			}
			if (value.length < 6 || value.length > 16) {
				errors.password.push("Should be between 6 and 16 characters");
			}
		}
		if (event.type == "change") {
			isMatch
				? (currentFieldRequirements[name]["isRegexValid"] = true)
				: (currentFieldRequirements[name]["isRegexValid"] = false);

			value.length < 6 || value.length > 16
				? (currentFieldRequirements[name]["lengthRangeValid"] = false)
				: (currentFieldRequirements[name]["lengthRangeValid"] = true);
		}
	}

	if (name == "repeatPassword") {
		const regex = /^[a-zA-Z0-9]+$/;

		const isMatch = value.match(regex);
		if (event.type == "blur") {
			if (!isMatch) {
				errors.repeatPassword.push("Only letters and numbers allowed");
			}
			if (value.length < 6 || value.length > 16) {
				errors.repeatPassword.push(
					"Should be between 6 and 16 characters"
				);
			}
		}
	}

	return { errors, currentFieldRequirements };
};
