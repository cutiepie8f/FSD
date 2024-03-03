const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const restrauntSchema = new Schema({
    city : 
    {
       type : Number,
       required : true 
    }

    
});

module.exports = mongoose.model('restrauntData' , restrauntSchema , 'restraunt');