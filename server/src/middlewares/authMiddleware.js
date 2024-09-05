const jwt = require("../lib/jwt");
const { JWT_SECRET } = require("../constants");
const CustomError = require("../utils/CustomError");

// If jwt token is provided and the token is valid attach user data to the request
exports.authMiddleware = async (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];
	if (token) {
		try {
			const user = await jwt.verify(token, JWT_SECRET);
			req.user = user;
			next();
		} catch (error) {
			next(new CustomError(401, "You are not authenticated"));
		}
	} else {
		next();
	}
};

// If auth required = true user should be authenticated to access the endpoint
// If auth required = false user should not be authenticated to access the endpoint
exports.isAuthRequired = (requiredAuth) => {
	return function (req, res, next) {
		if (requiredAuth && !req.user) {
			next(new CustomError(401, "You are not authenticated"));
		} else if (!requiredAuth && req.user) {
			next(new CustomError(409, "You are already authenticated"));
		}
		next();
	};
};
