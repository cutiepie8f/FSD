const Movie = require('../Models/movieDB')



exports.getMoviesDetails = (req, res) =>{
    Movie.find()
     .then(response=>{
        res.status(200).json({
            message : "Movies Details fetched successfully...!",
            movies : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}

exports.getMoviesDetailsById = (req, res) =>{
    const {movie_id} = req.params;
    Movie.findById(movie_id)
     .then(response=>{
        res.status(200).json({
            message : "Movies Details fetched successfully...!",
            show : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}


