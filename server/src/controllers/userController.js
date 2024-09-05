const router = require("express").Router();
const userService = require("../services/userService");
const { isAuthRequired } = require("../middlewares/authMiddleware");
const CustomError = require("../utils/CustomError");
// const asyncErrorCatcher = require("../utils/asyncErrorCatcher");

router.post("/register", isAuthRequired(false), async (req, res, next) => {
	try {
		const { email, password, repeatPassword } = req.body;

		const result = await userService.register({
			email,
			password,
			repeatPassword,
		});

		res.status(201).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		next(error);
	}
});

router.post("/login", isAuthRequired(false), async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const result = await userService.login({ email, password });

		res.status(200).json({
			status: "success",
			data: result,
		});
	} catch (error) {
		next(error);
	}
});

// TODO: refreshToken 2d and accessToken 15m || blacklisted currentToken on logout
router.get("/logout", isAuthRequired(true), (req, res, next) => {
	res.send({ message: "Logged out" });
});

module.exports = router;
