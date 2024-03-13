const express = require('express');
const movieCotroller  = require('../Controller/movie')


const route = express.Router();

route.get("", movieCotroller.getMoviesDetails);
route.get("/:movie_id", movieCotroller.getMoviesDetailsById);



module.exports = route;
