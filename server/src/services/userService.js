const User = require("../models/User");

exports.register = () => User.create(userData);
