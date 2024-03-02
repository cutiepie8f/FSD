const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const restrauntSchema = new Schema({
    name : String
    
});

module.exports = mongoose.model('locationnData' , restrauntSchema , 'location');