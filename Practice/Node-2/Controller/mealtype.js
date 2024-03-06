const Mealtype = require("../Models/mealtypeDB")

exports.getMealtype = (req, res) =>{
    Mealtype.find()
     .then(response=>{
        res.status(200).json({
            message : "Mealtype fetched successfully...!",
            meal : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}