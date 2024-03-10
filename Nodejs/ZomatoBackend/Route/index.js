const express = require('express');
const restrauntController = require('../Controller/restraunt');
const locationController = require('../Controller/location');
const mealtypeController = require('../Controller/mealtype');
const userController = require('../Controller/user');
const menuController = require('../Controller/menu');

const route = express.Router();

route.get('/location', locationController.getLocation);      //HomePage - Get Location API
route.get('/rest/:locId', restrauntController.getRestrauntByLocationId); // HomePage - Get restraunt by location API
route.get('/restraunts/:id', restrauntController.getRestrauntById);     //Details - Get restraunt by id API
route.get('/mealtype', mealtypeController.getMealtype);              // HomePage - Get Mealtype API
route.post('/signup', userController.postSignUp);                    // HomePage - POST signup API
route.post('/login', userController.postLogin);                     // HomePage - POST Login API
route.get('/menu/:resId', menuController.getMenuByRestrauntId);     // Details - Get Menu By Restraunt ID API

//Filter
route.get('/restraunt', restrauntController.getRestraunt);     // List of restraunts API
route.post('/filter', restrauntController.getFilteredRestraunt);


module.exports = route;
