const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restrauntSchema = Schema({
    city : Number
})

module.exports = mongoose.model('filterData' , restrauntSchema, 'restraunt')