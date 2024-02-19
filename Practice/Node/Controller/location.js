const Location = require('../Models/location.json');

exports.getLocation = (req, res) =>{
    res.status(200).json({
        message : "Data successfully fetched",
        location: Location
    })
}