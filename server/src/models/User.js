const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true,'Email field is required!'],
	},

	password: {
		type: String,
		required: [true,'Password fields are required!'],

	},
});

userSchema.pre("save", async function () {
	const hash = await bcrypt.hash(this.password, 10);
	this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
