const router = require("express").Router();
const userController = require("./controllers/userController");
const profileController = require("./controllers/profileController");

router.use("/users", userController);
router.use("/profiles", profileController);
router.all("*", (req, res, next) => {
	res.status(404).json({ message: `Page not found` });
});

module.exports = router;
