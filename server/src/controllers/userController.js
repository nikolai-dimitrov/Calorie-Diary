const router = require("express").Router();
const userService = require("../services/userService");
const { isAuthRequired } = require("../middlewares/authMiddleware");

router.post("/register", isAuthRequired(false), async (req, res, next) => {
	try {
		const { email, password, repeatPassword } = req.body;

		const result = await userService.register({
			email,
			password,
			repeatPassword,
		});

		res.json(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

router.post("/login", isAuthRequired(false), async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const result = await userService.login({ email, password });

		res.json(result);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});

// TODO: refreshToken 2d and accessToken 15m || blacklisted currentToken on logout
router.get("/logout", isAuthRequired(true), (req, res, next) => {
	res.send({ message: "Logged out" });
});

module.exports = router;
