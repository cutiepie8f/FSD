const express = require('express');

const locationController  = require('../Controller/location');  // Redirecting to the controlling page of the Location

const route = express.Router();         // Initiated the Router function from the Express Package

route.get('/location', locationController.getLocation);     // As per the request made

module.exports = route;

/*
    API Methods:
    - GET       = gets the data from the server
    - POST      = save data on the server
    - PUT       = updating the existing data enteries in the database.
    - DELETE    = Deletes the data from the database.
*/