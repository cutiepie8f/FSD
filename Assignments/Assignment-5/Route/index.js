const express = require('express');
const restrauntController = require("../Controller/restraunt");
const LocationController = require("../Controller/location");
const mealController = require("../Controller/meal");

const route = express.Router();

route.get('/location',LocationController.getLocation);
route.get('/restraunt/:city',restrauntController.getRestrauntByCity);
route.get('/widget ',mealController.getMealType);

module.exports = route;