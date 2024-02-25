const Location = require("../Models/location.json");

exports.getLocation = (req, res)=>{
    res.status(200).json({
        message : "Location Fetched Successfully",
        location : Location
    })
}