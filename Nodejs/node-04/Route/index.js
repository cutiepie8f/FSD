const express = require('express');

const locationController = require("../Controller/location.js");
const restrauntController = require("../Controller/restraunt.js");

const route = express.Router();

route.get("/location", locationController.getLocation);
route.get("/restraunt", restrauntController.getRestraunt);
route.get("/restraunt/:city", restrauntController.getRestrauntByCity);

module.exports = route