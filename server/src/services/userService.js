const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { JWT_SECRET } = require("../constants");

const getAuthResult = async (user) => {
	const payload = { _id: user._id, email: user.email };
	const accessToken = await jwt.sign(payload, JWT_SECRET, {
		expiresIn: "2d",
	});

	const result = { accessToken, user: payload };
	return result;
};

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

	const result = getAuthResult(user);
	return result;
};
