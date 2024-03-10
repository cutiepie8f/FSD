const express = require('express');
const restrauntController = require('../Controller/restraunt');

const route = express.Router();

route.post('/filter', restrauntController.filteredRestraunt);
route.post('/sort', restrauntController.sortRestraunt);
route.post('/pagination', restrauntController.restrauntPagination);


module.exports = route;

