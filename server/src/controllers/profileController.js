const router = require("express").Router();
const profileService = require("../services/profileService");

router.get("/", async (req, res, next) => {
	// TODO:
});

router.post("/", async (req, res, next) => {
	try {
		const profileData = { ...req.body, owner: req.user?._id };
		const profile = await profileService.createProfile(profileData);
		res.json(profile);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
