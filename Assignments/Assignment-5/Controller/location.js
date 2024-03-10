const { response } = require("express");
const Location = require("../Models/locationDB");

exports.getLocation = (req, res) =>{
    Location.find()
     .then(response=>{
        res.status(200).json({
            message : "Location fetched successfully...!",
            Location : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}