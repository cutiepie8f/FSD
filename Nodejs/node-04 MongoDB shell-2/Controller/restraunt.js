const Restraunt = require('../Models/restraunt(shell)');
const { response } = require('express');

exports.getRestraunt = (req, res) =>{
    Restraunt.find()
     .then(response=>{
        res.status(200).json({
            message : "Restraunt fetched successfully...!",
            restraunt : response
        })
    })
        
}