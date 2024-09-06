const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
	gender: {
		type: String,
		enum: ["male", "female"],
		default: ["male"], //
	},

	age: {
		type: Number,
		min: [1, "Your age should be greater than 1"],
		min: [100, "Your age should be less than 100"],
	},

	height: {
		type: Number,
		required: [true, "Height is required"],
		min: [100, "Your height should be greater than 100cm"],
		max: [270, "Your height should be less than 270cm"],
	},

	currentWeight: {
		type: Number,
		required: [true, "Weight is required"],
		min: [20, "Your weight should be greater than 20kg"],
		max: [300, "Your weight should be less than 300kg"],
	},

	targetWeight: {
		type: Number,
		required: [true, "Target weight is required"],
	},

	bodyGoal: {
		type: String,
		enum: ["Lose Weight", "Gain Weight", "Maintain Weight"],
		default: ["Maintain Weight"], //
		required: [true, "Body goal is required"],
	},

	caloriesGoal: {
		type: Number,
		//e.g 1700 calorie target
	},

	bmr: {
		type: Number,
		// e.g 2100 to maintain
	},

	owner: {
		type: mongoose.Types.ObjectId,
		ref: "User",
	},
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;

// activityLevel: {
// 	type: Number,
// 	min: [1, "Your activity level should be greater than 1"],
// 	max: [5, "Your activity level should be lower or equal to 5"],
// },

// Other model -> daily activity for example
// Exercise Calorie burned - eating calorie get - cardio/workout/
