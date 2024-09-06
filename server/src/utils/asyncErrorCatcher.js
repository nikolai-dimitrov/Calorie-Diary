// Wrap controller async functions and If error occur, it catches the error and pass to the global error handler.
// Usage: Instead of using try catch in every async function, this function wraps them and take care of error handling.
const asyncErrorCatcher = (func) => {
	return (req, res, next) => {
		func(req, res, next).catch((error) => next(error));
	};
};
module.exports = asyncErrorCatcher;

// router.post(
// 	"/login",
// 	isAuthRequired(false),
// 	asyncErrorCatcher(async (req, res) => {
// 		const { email, password } = req.body;
// 		const result = await userService.login({ email, password });

// 		res.status(200).json({
// 			status: "success",
// 			data: result,
// 		});
// 	})
// );