const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mealSchema = new Schema({
    _id : String
});

module.exports = mongoose.model('mealData' , mealSchema , 'mealtype');