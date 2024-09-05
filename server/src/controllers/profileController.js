const router = require("express").Router();

router.get("/", async (req, res, next) => {
	res.json("Profile");
});

module.exports = router;
