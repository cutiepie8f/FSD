const express = require('express');
const restrauntController = require('../Controller/restraunt');
const locationController = require('../Controller/location');
const mealtypeController = require('../Controller/mealtype');
const userController = require('../Controller/user');
const menuController = require('../Controller/menu');
const userDetailsController = require('../Controller/userDetails');


const route = express.Router();

route.get('/location', locationController.getLocation);
route.get('/restraunt', restrauntController.getRestraunt);
route.get('/rest/:locId', restrauntController.getRestrauntByLocationId);
route.get('/restraunts/:id', restrauntController.getRestrauntById);
route.get('/mealtype', mealtypeController.getMealtype);
route.post('/signup', userController.postSignUp);
route.post('/login', userController.postLogin);
route.get('/menu/:resId', menuController.getMenuByRestrauntId);
route.post('/userdetails', userDetailsController.postUserDetails);



module.exports = route;
