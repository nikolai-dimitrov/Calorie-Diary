const ActivityReport = require("../models/ActivityReport");
const CustomError = require("../utils/CustomError");
const getUserProfile = require("../helpers/getUserProfile");
const calculateCalorieResults = require("../helpers/calculateCalorieResult");

//TODO: Handle db errors

exports.getActivityReports = async (userId) => {
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
	// retrieve entity func
	// rename activity report exists 
	// retrieve activityReport from util func than update current record (remove findByIdAndUpdate)
	const activityReportExists = await ActivityReport.findById(
		activityReportId
	);

	if (!activityReportExists) {
		throw new CustomError(404, "This activity report does not exists");
	}

	const caloriesResult = calculateCalorieResults(
		activityReportExists.bmr, // 
		newActivityReportData
	);

	newActivityReportData.caloriesComparedToBmr = caloriesResult;

	const activityReport = await ActivityReport.findByIdAndUpdate(
		activityReportId,
		newActivityReportData,
		{ runValidators: true, new: true }
	);

	console.log(activityReport);
	return activityReport;
};

exports.deleteActivityReport = async (activityReportId) => {
	// retrieve entity func
	const activityReportExists = await ActivityReport.findById(
		activityReportId
	);

	if (!activityReportExists) {
		throw new CustomError(404, "This activity report does not exists");
	}

	const activityReport = await ActivityReport.findByIdAndDelete(
		activityReportId
	);
	return activityReport;
};
