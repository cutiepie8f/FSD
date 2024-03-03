const Restraunt = require('../Models/restrauntDB');


exports.getRestraunt = (req, res) =>{
    Restraunt.find()
     .then(response=>{
        res.status(200).json({
            message : "Restraunt fetched successfully...!",
            restraunt : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}


exports.getRestrauntByLocationId = (req, res) =>{
    const {locId} = req.params;
    Restraunt.find({city : locId},{})
     .then(response=>{
        res.status(200).json({
            message : "Restraunt fetched successfully by Location ID...!",
            restraunt : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}


exports.getRestrauntById = (req, res) =>{
    const { id } = req.params;
    Restraunt.findById(id)
     .then(response=>{
        console.log(response);
        res.status(200).json({
            message : "Restraunt fetched successfully by ID...!",
            restraunts : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}


