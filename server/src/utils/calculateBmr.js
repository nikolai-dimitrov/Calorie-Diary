// Calculate bmr based on provided user information
exports.calculateBmr = ({ currentWeight, height, age, gender }) => {
	const bmr =
		gender == "male"
			? 88.362 +
			  13.397 * Number(currentWeight) +
			  4.799 * Number(height) -
			  5.677 * Number(age)
			: 447.593 +
			  9.247 * Number(currentWeight) +
			  3.098 * Number(height) -
			  4.33 * Number(age);
	return bmr;
};
