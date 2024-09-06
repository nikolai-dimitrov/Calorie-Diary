exports.calculateBmr = (weight, height, age, gender) => {
	const bmr =
		gender == "male"
			? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
			: 447.593 + (9.247 * weight) + (3.098 * height) - (4.33 * age);
	return bmr;
};
