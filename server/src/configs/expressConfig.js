const express = require("express");
const cors = require("cors");
const routes = require("../routes");

const setupExpress = (app) => {
	app.use(cors());
	app.use(express.json());
	app.use(routes);

	// app.use(express.urlencoded({ extended: false }));
};

module.exports = setupExpress;
