const Location = require('../Models/location.json');

exports.getLocation = (req, res) => {                   // exports the specific controlling function
    res.status(200).json({
        message: "Locations Fetched Successfully",
        location: Location
    })
}