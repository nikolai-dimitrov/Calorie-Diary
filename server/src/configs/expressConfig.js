const express = require("express");
const cors = require("cors");
const routes = require("../routes");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
	errorHandlerMiddleware,
} = require("../middlewares/errorHandlerMiddleware");

const setupExpress = (app) => {
	app.use(cors());
	app.use(express.urlencoded({ extended: false })); // urlencoded, querystring
	app.use(express.json()); // ajax request
	app.use(authMiddleware);
	app.use(routes);
	app.use(errorHandlerMiddleware);
};

module.exports = setupExpress;
