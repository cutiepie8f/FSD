const  express = require('express');
const locationController = require('../Controller/location');

const route = express.Router();

route.get('/location', locationController.getLocation);

module.exports = route;