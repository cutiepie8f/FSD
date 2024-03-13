const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
    synopsis : {
        type : String,
        required : true
    }

   
    
    
});

module.exports = mongoose.model('moviesDetails' , movieSchema , 'movies');