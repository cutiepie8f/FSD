const Restraunt = require('../Models/menuDB');

exports.getMenuByRestrauntId = (req, res) =>{
    const { resId } = req.params;
    Restraunt.find({restaurantId : resId})
     .then(response=>{
        console.log(response);
        res.status(200).json({
            message : "Menu fetched successfully By Restraunt ID...!",
            menu : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}