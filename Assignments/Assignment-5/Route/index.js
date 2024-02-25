const express = require('express');
const restrauntController = require("../Controller/restraunt");

const route = express.Router();

route.get('/restraunt/:city',restrauntController.getRestrauntByCity);

module.exports = route;