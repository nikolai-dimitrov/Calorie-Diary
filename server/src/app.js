const express = require("express");
const expressConfig = require("./configs/expressConfig");
const mongooseConfig = require("./configs/mongooseConfig")
const { PORT } = require("./constants");
app = express();

async function startApp(app) {
	try {
		expressConfig(app);
		mongooseConfig()

		app.listen(PORT, () => {
			console.log(`Listening on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
}

startApp(app);
