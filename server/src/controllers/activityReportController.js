const router = require("express").Router();
const activityReportService = require("../services/activityReportService");
const { isAuthRequired } = require("../middlewares/authMiddleware");

router.get("/", isAuthRequired(true), async (req, res, next) => {
	try {
		const userId = req.user?._id;
		const page = req.query.page || 1;
		const limit = req.query.limit || 10;

		const { activityReports, totalDocumentsCount } =
			await activityReportService.getActivityReports(userId, page, limit);

		res.status(200).json({
			status: "success",
			data: activityReports,
			totalDocumentsCount: totalDocumentsCount,
		});
	} catch (error) {
		next(error);
	}
});

router.get(
	"/track-progress/:id",
	isAuthRequired(true),
	async (req, res, next) => {
		try {
			const bodyGoalId = req.params.id;
			const userId = req.user?._id;
			const progress = await activityReportService.getProgressInformation(
				userId,
				bodyGoalId
			);
			res.status(200).json({
				status: "success",
				data: progress,
			});
		} catch (error) {
			next(error);
		}
	}
);

router.post("/", isAuthRequired(true), async (req, res, next) => {
	try {
		const activityReportData = req.body;
		const userId = req.user?._id;

		const activityReport = await activityReportService.createActivityReport(
			activityReportData,
			userId
		);

		res.status(201).json({
			status: "success",
			data: activityReport,
		});
	} catch (error) {
		next(error);
	}
});

router.put("/:id", isAuthRequired(true), async (req, res, next) => {
	try {
		const activityReportId = req.params.id;
		const newActivityReportData = req.body;
		const userId = req.user?._id;

		const activityReport = await activityReportService.updateActivityReport(
			activityReportId,
			newActivityReportData,
			userId
		);

		res.status(200).json({
			status: "success",
			data: activityReport,
		});
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", isAuthRequired(true), async (req, res, next) => {
	try {
		const activityReportId = req.params.id;
		const userId = req.user?._id;

		const deleteConfirmation =
			await activityReportService.deleteActivityReport(
				activityReportId,
				userId
			);

		res.status(202).json({
			status: "success",
			data: deleteConfirmation,
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
