const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const locationSchema = new Schema({
    name : String,
    _id : String
    
});

module.exports = mongoose.model('locationnData' , locationSchema , 'location');