class CustomError extends Error {
	constructor(statusCode, message) {
		super(message);
		this.statusCode = statusCode || 500;
		// use this property to send error to client if error is operational
		this.isOperational = true;

		// capture the stack trace in development
		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = CustomError;
