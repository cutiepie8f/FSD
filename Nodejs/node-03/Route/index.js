const express = require('express');

const locationController = require('../Controller/location');  // Redirecting to the contolling page of the location
 
const route = express.Router();     // Initiated the router function from the express package

route.get('/location', locationController.getLocation);   // As per the request made

module.exports = route;

/*
   API Methods
     -  GET - gets the data fromthe server
     - POST - save data on the server
     -  PUT - updating the existing data entries in the database
     - DELETE - delete the data from the database
*/