const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const restrauntSchema = new Schema({
    _id : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('sample' , restrauntSchema , 'restraunt');