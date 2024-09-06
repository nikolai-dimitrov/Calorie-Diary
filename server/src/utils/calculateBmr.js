exports.calculateBmr = (weight, height, age, gender) => {
	console.log(weight, height, age);
	const bmr =
		gender == "male"
			? 88.362 +
			  13.397 * Number(weight) +
			  4.799 * Number(height) -
			  5.677 * Number(age)
			: 447.593 +
			  9.247 * Number(weight) +
			  3.098 * Number(height) -
			  4.33 * Number(age);
	return bmr;
};
