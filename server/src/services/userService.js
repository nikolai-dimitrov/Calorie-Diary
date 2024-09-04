const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { JWT_SECRET } = require("../constants");

exports.register = (userData) => User.create(userData);

exports.login = async ({ email, password }) => {
	const user = await User.findOne({ email });
	if (!user) {
		throw new Error("Invalid email or password");
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (!isPasswordValid) {
		throw new Error("Invalid email or password");
	}
      
	const payload = { _id: user._id, email: user.email };
	const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: "2d" });
	return token;
};
