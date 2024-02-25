const Restraunt = require("../Models/restraunt.json");

exports.getRestrauntByCity = (req, res) =>{
    const {city} = req.params;
    const filteredRestaunt = Restraunt.filter(i => i.city_name == city);
    res.status(200).json({
        message : "Restraunt fetched succesfully By City",
        restraunt : filteredRestaunt
    })
}