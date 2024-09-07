const router = require("express").Router();
const userController = require("./controllers/userController");
const profileController = require("./controllers/profileController");
const activityReportController = require("./controllers/activityReportController");
const CustomError = require("./utils/CustomError");

router.use("/users", userController);
router.use("/profiles", profileController);
router.use("/activity-reports", activityReportController);
router.all("*", (req, res, next) => {
	const error = new CustomError(404, "Page not found");
	next(error);
});

module.exports = router;
