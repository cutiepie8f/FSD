const { response } = require("express");
const Meal = require("../Models/mealTypeDB");

exports.getMealType = (req, res) =>{
    Meal.find()
     .then(response=>{
        res.status(200).json({
            message : "Meal fetched successfully...!",
            meal : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}