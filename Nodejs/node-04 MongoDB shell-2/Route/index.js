const express = require('express');
const restrauntController = require('../Controller/restraunt');

const route = express.Router();

route.get('/restraunt', restrauntController.getRestraunt);

module.exports = route;
