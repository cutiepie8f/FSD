const { response } = require("express");
const Restraunt = require("../Models/restraunt");

exports.getRestrauntByCity = (req, res) =>{
    const {city} = req.params;
    Restraunt.find({city_name : city},{})
     .then(response=>{
        res.status(200).json({
            message : "Restraunt fetched successfully by city...!",
            restraunt : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}