const router = require("express").Router();
const profileService = require("../services/profileService");
const { isAuthRequired } = require("../middlewares/authMiddleware");
// Get profile
router.get("/", isAuthRequired(true), async (req, res, next) => {
	try {
		const userId = req.user?._id;
		const profile = await profileService.getProfile(userId);
		res.status(200).json({
			status: "success",
			data: profile,
		});
	} catch (error) {
		next(error);
	}
});
// Create profile
router.post("/", isAuthRequired(true), async (req, res, next) => {
	try {
		const profileData = { ...req.body, owner: req.user?._id };
		const profile = await profileService.createProfile(profileData);
		res.status(201).json({
			status: "success",
			data: profile,
		});
	} catch (error) {
		next(error);
	}
});
// Update profile
router.put("/", isAuthRequired(true), async (req, res, next) => {
	try {
		const profileData = { ...req.body, owner: req.user?._id };
		const profile = await profileService.updateProfile(profileData);
		res.status(200).json({
			status: "success",
			data: profile,
		});
	} catch (error) {
		next(error);
	}
});
module.exports = router;
