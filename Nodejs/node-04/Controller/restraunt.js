const Restraunt = require("../Models/restraunt.json");

exports.getRestraunt = (req, res)=>{
    res.status(200).json({
        message : "Restraunt Fetched Successfully",
        restraunt : Restraunt
    })
}

exports.getRestrauntByCity = (req, res)=>{
    const {city} = req.params;
    const filteredRestraunt = Restraunt.filter(i => i.city_name == city)
    res.status(200).json({
        message : "Restraunt Fetched Successfully By City",
        restraunt : filteredRestraunt
    })
}