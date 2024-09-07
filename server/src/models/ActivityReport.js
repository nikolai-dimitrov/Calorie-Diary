const mongoose = require("mongoose");

const activityReportSchema = new mongoose.Schema({
	eatenCalories: {
		type: Number,
		required: [true, "Calories consumed by food are required"],
		min: [
			0,
			"Minimum amount of calories consumed by food should be at least 0",
		],
		max: [
			15000,
			"Maximum amount of calories consumed by food should be less than 15000",
		],
	},

	exerciseBurnedCalories: {
		type: Number,
		required: [true, "Calories burned during exercises are required"],
		min: [
			0,
			"Minimum amount of calories burned by exercises should be at least 0",
		],
		max: [
			3000,
			"Maximum amount of calories burned by exercises should be less 3000",
		],
	},

	caloriesGoal: {
		type: Number,
	},

	caloriesComparedToBmr: {
		type: Number,
	},

	bmr: {
		type: Number,
	},

	profile: {
		type: mongoose.Types.ObjectId,
		ref: "Profile",
	},
});

const ActivityReport = mongoose.model("ActivityReport", activityReportSchema);
module.exports = ActivityReport;
