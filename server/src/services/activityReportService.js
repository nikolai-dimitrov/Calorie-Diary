const ActivityReport = require("../models/ActivityReport");
const CustomError = require("../utils/CustomError");
const getUserProfile = require("../helpers/getUserProfile");
const calculateCalorieResults = require("../helpers/calculateCalorieResult");

const retrieveReportOrThrow = async (id) => {
	const activityReport = await ActivityReport.findById(id);
	if (!activityReport) {
		throw new CustomError(404, "This activity report does not exists");
	}
	return activityReport;
};

//TODO: Handle db errors
exports.getActivityReports = async (userId) => {
	// TODO: getUserProfile
	const profile = await getUserProfile(userId);
	const activityReports = await ActivityReport.find({ profile: profile._id });
	return activityReports;
};

exports.createActivityReport = async (activityReportData, userId) => {
	const profile = await getUserProfile(userId);

	const caloriesResult = calculateCalorieResults(
		profile.bmr,
		activityReportData
	);

	const activityReport = await ActivityReport.create({
		...activityReportData,
		owner: profile._id,
		caloriesGoal: profile.caloriesGoal,
		bmr: profile.bmr,
		caloriesComparedToBmr: caloriesResult,
	});
	// console.log(activityReport.)
	return activityReport;
};

exports.updateActivityReport = async (
	activityReportId,
	newActivityReportData,
	userId
) => {
	const profile = await getUserProfile(userId);
	const oldActivityReport = await retrieveReportOrThrow(activityReportId);

	if (oldActivityReport.owner != profile.id) {
		throw new CustomError(403, "Permission denied");
	}

	const caloriesResult = calculateCalorieResults(
		oldActivityReport.bmr,
		newActivityReportData
	);

	newActivityReportData.caloriesComparedToBmr = caloriesResult;

	const activityReport = await ActivityReport.findByIdAndUpdate(
		activityReportId,
		newActivityReportData,
		{ runValidators: true, new: true }
	);

	return activityReport;
};

exports.deleteActivityReport = async (activityReportId, userId) => {
	const profile = await getUserProfile(userId);
	const activityReport = await retrieveReportOrThrow(activityReportId);

	if (activityReport.owner != profile.id) {
		throw new CustomError(403, "Permission denied");
	}
	const deleteConfirmation = activityReport.deleteOne();
	return deleteConfirmation;
};
