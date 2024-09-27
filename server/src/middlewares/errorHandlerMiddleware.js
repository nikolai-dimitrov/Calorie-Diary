const CustomError = require("../utils/CustomError");

const handleDevErrors = (error, res) => {
	res.status(error.statusCode).json({
		status: error.status,
		message: error.message,
		stackTrace: error.stack,
		error: error,
	});
};

const handleProdErrors = (error, res) => {
	if (error.isOperational) {
		res.status(error.statusCode).json({
			status: error.status,
			message: error.message,
		});
	} else {
		// In case : Error hasn't been thrown by CustomError class.
		res.status(500).json({
			status: "error",
			message: "Something went wrong!",
		});
	}
};

const handleCastErrors = (error) => {
	return new CustomError(400, `Invalid value for field: ${error.path}`);
};

const handleValidationErrors = (error) => {
	const errorsMessages = Object.values(error.errors).map(
		(errValue) => errValue.message
	);
	const formatErrorMessages = errorsMessages.join(" ");
	return new CustomError(400, formatErrorMessages);
};

exports.errorHandlerMiddleware = (error, req, res, next) => {
	error.statusCode = error.statusCode || 500;
	error.status = error.status || "error";
	if (process.env.NODE_ENV == "prod") {
		if (error.name == "CastError") error = handleCastErrors(error);
		if (error.name == "ValidationError")
			error = handleValidationErrors(error);

		handleProdErrors(error, res);
	} else if (process.env.NODE_ENV == "dev") {
		handleDevErrors(error, res);
	}
};
