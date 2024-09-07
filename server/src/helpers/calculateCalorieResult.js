// Calculate calories compared to BMR
// Subtract burned calories from eaten calories and than if sum is less than BMR convert sum into negative number
const calculateCalorieResult = (bmr, activityReportData) => {
	const sum =
		activityReportData.eatenCalories -
		activityReportData.exerciseBurnedCalories;

	const caloriesResult = bmr > sum ? -(bmr - sum) : sum - bmr;

	return caloriesResult;
};

module.exports = calculateCalorieResult;
