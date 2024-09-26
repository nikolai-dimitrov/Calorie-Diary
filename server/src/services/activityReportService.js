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

/* 
* Find searched body goal start date and end date than return whole period
* End of body goal period is considered to be next body goal start date
  - If there isn't next body goal it returns today date as toDate
  Example: 
 - profile.bodyGoalHistory[2] returns 2024.01.01 -> start lose weight (fromDate)
 - profile.bodyGoalHistory[3] returns 2024.03.01 -> start gain weight (toDate)
 - Lose weight period is between index 2 and index 3 (2024.01.01 -> 2024.03.01) 
 - If there isn't profile.bodyGoalHistory[3] returns (today as toDate) it means user is still in lose weight phase
*/
const getBodyGoalPeriod = (profile, bodyGoalId) => {
	// Body goals in profile are sorted ascending -> latest to oldest
	const searchedBodyGoalIndex = profile.bodyGoalHistory.findIndex(
		(el) => el.id == bodyGoalId
	);

	if (searchedBodyGoalIndex == -1) {
		throw new CustomError(404, "This body goal doesn't exist");
	}

	const fromDate = profile.bodyGoalHistory.at(
		searchedBodyGoalIndex
	).createdAt;

	let toDate = profile.bodyGoalHistory.at(
		searchedBodyGoalIndex + 1
	)?.createdAt;

	if (toDate == undefined) {
		toDate = new Date();
	}

	return [fromDate, toDate];
};

// TODO: Handle db errors
exports.getActivityReports = async (userId, page, limit) => {
	const profile = await getUserProfile(userId);
	const skip = (page - 1) * limit;

	const totalDocumentsCount = await ActivityReport.countDocuments({
		owner: profile._id,
	});

	if (totalDocumentsCount == 0) {
		throw new CustomError(404, "You haven't created activity report yet.");
	}

	const activityReports = await ActivityReport.find({
		owner: profile._id,
	})
		.skip(skip)
		.limit(limit);

	return { activityReports, totalDocumentsCount };
};

// Calculate and return your weight progress for specified body goal
// TODO: Return records for provided time period : last 7 days 14 days 1 month etc.
exports.getProgressInformation = async (userId, bodyGoalId) => {
	const profile = await getUserProfile(userId);
	const [fromDate, toDate] = getBodyGoalPeriod(profile, bodyGoalId);

	const activityReports = await ActivityReport.find({
		owner: profile.id,
		createdAt: {
			$gte: fromDate,
			$lte: toDate,
		},
	}).select("caloriesComparedToBmr");

	const totalCaloriesSum = activityReports.reduce(
		(total, el) => total + el.caloriesComparedToBmr,
		0
	);

	const kcalConvertedToKg = (totalCaloriesSum / 7700).toFixed(2);
	return kcalConvertedToKg;
};

exports.createActivityReport = async (activityReportData, userId) => {
	const profile = await getUserProfile(userId);

	const caloriesResult = calculateCalorieResults(
		profile.bmr,
		activityReportData
	);

	const startOfTheDay = new Date();
	startOfTheDay.setHours(0, 0, 0, 0);

	const todayActivityReports = await ActivityReport.find({
		createdAt: { $gte: startOfTheDay },
		owner: profile._id,
	});

	if (todayActivityReports.length > 0) {
		throw new CustomError(
			409,
			"You have already logged your today's activity report"
		);
	}

	const activityReport = await ActivityReport.create({
		...activityReportData,
		owner: profile._id,
		caloriesGoal: profile.caloriesGoal,
		bmr: profile.bmr,
		caloriesComparedToBmr: caloriesResult,
	});

	activityReport.save();
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
