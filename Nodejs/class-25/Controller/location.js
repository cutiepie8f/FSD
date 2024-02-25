const Location = require('../Models/location(shell)');

exports.getLocation = (req, res) => {                   // exports the specific controlling function

    Location.find()
        .then(response => {
            res.status(200).json({
                message: "Locations Fetched Successfully",
                location: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
    
}