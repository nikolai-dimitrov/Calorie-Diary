const jwt = require("../lib/jwt");
const { JWT_SECRET } = require("../constants");

// If jwt token is provided and the token is valid attach user data to the request 
exports.authMiddleware = async (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];
	if (token) {
		try {
			const user = await jwt.verify(token, JWT_SECRET);
			req.user = user;
			next();
		} catch (error) {
			res.status(401).json({ message: "You are not authenticated" });
			// next(error);
		}
	} else {
		next();
	}
};
