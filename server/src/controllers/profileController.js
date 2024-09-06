const router = require("express").Router();
const profileService = require("../services/profileService");
const { isAuthRequired } = require("../middlewares/authMiddleware");

router.get("/", isAuthRequired(true), async (req, res, next) => {
	try {
		const userId = req.user?._id;
		const profile = await profileService.getProfile(userId);
		res.json(profile);
	} catch (error) {
		next(error);
	}

	// TODO:
});

router.post("/", isAuthRequired(true), async (req, res, next) => {
	try {
		const profileData = { ...req.body, owner: req.user?._id };
		const profile = await profileService.createProfile(profileData);
		res.json(profile);
	} catch (error) {
		next(error);
	}
});
router.put("/", isAuthRequired(true), async (req, res, next) => {});
module.exports = router;
