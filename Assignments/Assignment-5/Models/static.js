const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const restrauntSchema = new Schema({
    city_name : {
        type : String,
        required : true
    },
    _id: {
        type : String,
        required : true 
    }
    
});

module.exports = mongoose.model('restrauntDataSet' , restrauntSchema , 'restraunt');