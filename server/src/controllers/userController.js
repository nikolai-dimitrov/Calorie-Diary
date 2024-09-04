const router = require("express").Router();
const userService = require("../services/userService");
router.post("/register", async (req, res, next) => {
	try {
		const { email, password } = req.body;
		await userService.register({ email, password });
            
		res.json({ message: "Registered successfully" });
	} catch (error) {
		res.status(400).json({ message });
	}
});

router.post("/login", (req, res, next) => {
	res.send("Login");
});

router.get("/logout", (req, res, next) => {
	res.send({ logout: "Logged out" });
});

module.exports = router;
