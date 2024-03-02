const express = require('express');
const restrauntController = require('../Controller/restraunt');
const LocationController = require('../Controller/location');

const route = express.Router();

route.get('/location', LocationController.getLocation);
route.get('/restraunt', restrauntController.getRestraunt);
// route.get('/restraunt/:city', restrauntController.getRestrauntByCity);
route.get('/restraunt/:locId', restrauntController.getRestrauntByLocationId);

module.exports = route;
