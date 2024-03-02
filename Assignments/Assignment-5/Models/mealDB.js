const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mealSchema = new Schema({
    id : Number
});

module.exports = mongoose.model('mealData' , mealSchema , 'meal');