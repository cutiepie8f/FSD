const express = require('express');     // importing express (ES5)

const locationController = require('../Controller/location');  // Redirecting to the controlling page of the Location

const route = express.Router();         // Initiated the Router function from the Express Package

route.get('/location', locationController.getLocation);     // As per the request made

module.exports = route;