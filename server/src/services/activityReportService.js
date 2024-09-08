const ActivityReport = require("../models/ActivityReport");
const CustomError = require("../utils/CustomError");
const getUserProfile = require("../helpers/getUserProfile");
const calculateCalorieResults = require("../helpers/calculateCalorieResult");

const retrieveReportOrThrow = async (id) => {
	const activityReportExists = await ActivityReport.findById(id);
	if (!activityReportExists) {
		throw new CustomError(404, "This activity report does not exists");
	}
	return activityReportExists;
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
		profile: profile._id,
		caloriesGoal: profile.caloriesGoal,
		bmr: profile.bmr,
		caloriesComparedToBmr: caloriesResult,
	});

	return activityReport;
};

exports.updateActivityReport = async (
	activityReportId,
	newActivityReportData
) => {
	const oldActivityReport = await retrieveReportOrThrow(activityReportId);

	const caloriesResult = calculateCalorieResults(
		oldActivityReport.bmr, //
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

exports.deleteActivityReport = async (activityReportId) => {
	const activityReport = await retrieveReportOrThrow(activityReportId);
	const deleteConfirmation = activityReport.deleteOne();
	return deleteConfirmation;
};
