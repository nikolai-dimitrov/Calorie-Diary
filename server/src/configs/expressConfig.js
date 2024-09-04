const express = require("express");
const cors = require("cors");
const routes = require("../routes");

const setupExpress = (app) => {
	app.use(cors());
	app.use(express.urlencoded({ extended: false })); // urlencoded, querystring
	app.use(express.json()); // ajax request
	app.use(routes);
};

module.exports = setupExpress;
