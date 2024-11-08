const mongoose = require("mongoose");

const goalHistorySchema = new mongoose.Schema({
	goal: {
		type: String,
		enum: {
			values: ["Lose Weight", "Gain Weight", "Maintain Weight"],
			message:
				"Body Goal should be Lose Weight, Gain Weight, Maintain Weight!",
		},
		required: true,
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},

	startWeight: {
		type: Number,
	},

	currentWeight: {
		type: Number,
	},

	targetWeight: {
		type: Number,
	},
});

const profileSchema = new mongoose.Schema({
	gender: {
		type: String,
		enum: {
			values: ["male", "female"],
			message: "Gender must be male or female!",
		},
	},

	age: {
		type: Number,
		required: [true, "Age is required!"],
		min: [1, "Your age should be greater than 1!"],
		max: [100, "Your age should be less than 100!"],
	},

	height: {
		type: Number,
		required: [true, "Height is required!"],
		min: [100, "Your height should be greater than 100cm!"],
		max: [270, "Your height should be less than 270cm!"],
	},

	currentWeight: {
		type: Number,
		required: [true, "Weight is required!"],
		min: [20, "Your weight should be greater than 20kg!"],
		max: [300, "Your weight should be less than 300kg!"],
	},

	targetWeight: {
		type: Number,
		required: [true, "Target weight is required!"],
		min: [20, "Your target weight should be greater than 20kg!"],
		max: [300, "Your target weight should be less than 300kg!"],
	},

	bodyGoal: {
		type: String,
		enum: {
			values: ["Lose Weight", "Gain Weight", "Maintain Weight"],
			message:
				"Body Goal should be Lose Weight, Gain Weight, Maintain Weight!",
		},
		required: [true, "Body goal is required!"],
	},

	/** 
	* bodyGoalHistory:
	- This field contains information about when user start to gain weight or lose weight 
	- It will be used to show time period for every phase like lose/gain or maintain weight
	- Based on that information we will calculate user's weight progress
	**/
	bodyGoalHistory: [goalHistorySchema],

	caloriesGoal: {
		required: [true, "Your calorie target is required"],
		type: Number,
		min: [20, "Your calories goal should be greater than 100kcal!"],
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

profileSchema.pre("save", async function () {
	if (this.bodyGoalHistory.length == 0) {
		this.bodyGoalHistory.push({
			goal: this.bodyGoal,
			currentWeight: this.currentWeight,
			startWeight: this.currentWeight,
			targetWeight: this.targetWeight,
		});
	}
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
