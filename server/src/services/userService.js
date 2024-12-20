const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { JWT_SECRET } = require("../constants");
const CustomError = require("../utils/CustomError");
const getUserProfile = require("../helpers/getUserProfile");

const getAuthResult = async (user) => {
	const payload = { _id: user._id, email: user.email };
	const accessToken = await jwt.sign(payload, JWT_SECRET, {
		expiresIn: "2d",
	});

	const result = { accessToken, user: payload };
	return result;
};

exports.register = async (userData) => {
	const userExists =
		(await User.countDocuments({ email: userData.email })) >= 1
			? true
			: false;

	if (userExists) {
		throw new CustomError(409, "User already exists");
	}

	if (userData.password != userData.repeatPassword) {
		throw new CustomError(409, "Passwords do not match");
	}

	const user = await User.create(userData);
	// TODO: DB ERRORS -> create error handling
	const result = await getAuthResult(user);
	result.user["hasProfile"] = false;
	return result;
};

exports.login = async ({ email, password }) => {
	const user = await User.findOne({ email });
	if (!user) {
		throw new CustomError(401, "Invalid email or password");
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (!isPasswordValid) {
		throw new CustomError(401, "Invalid email or password");
	}

	const result = await getAuthResult(user);

	const hasProfile = await getUserProfile(result.user._id, true);
	result.user.hasProfile = hasProfile;

	return result;
};

// TODO Logout functionality
exports.logout = async ({ email, password }) => {};
