export const validateAuth = (event) => {
	const name = event.target.name;
	const value = event.target.value;
	let errors = {
		[name]: [],
	};

	if (name == "email") {
		const regex = /^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/;
		const isMatch = value.match(regex);
		if (!isMatch) {
			errors.email.push("Please enter valid email.");
		}
	}

	if (name == "password") {
		const regex = /^[a-zA-Z0-9]+$/;

		const isMatch = value.match(regex);
		if (!isMatch) {
			errors.password.push("Only letters and numbers allowed");
		}
		if (value.length < 6 || value.length > 16) {
			errors.password.push("Should be between 6 and 16 characters");
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

	return errors;
};
