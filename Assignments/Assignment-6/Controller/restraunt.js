const { response } = require("express");
const Restraunt = require('../Model/restrauntDB');


// filter restraunt
exports.filteredRestraunt = (req, res) =>{
    let {location, cuisine, lcost, hcost, mealtype} = req.body;
    var filterObj = {};
    location && (filterObj["city"] = location);
    cuisine && (filterObj["Cuisine.cuisine"] = {$in : cuisine});
    lcost && hcost && (filterObj["cost"] = {$gte : lcost, $lte : hcost});
    mealtype && (filterObj["type.mealtype"] = mealtype);

    Restraunt.find(filterObj)
    .then(response =>{
     res.status(200).json({
        message : "Restraunt filter successfully...........!",
        Restraunt : response
     })
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}


//sort restraunt

exports.sortRestraunt = (req, res) =>{
    let { sort } = req.body;

    sort = sort ? sort : 1
    console.log(sort);
    var filterObj = {};

    Restraunt.find(filterObj).sort({cost : sort})
    .then(response =>{
     res.status(200).json({
        message : "Restraunt filter successfully...........!",
        Restraunt : response
     })
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}

//pagination

exports.restrauntPagination = (req, res) =>{
    let { page } = req.body;

    page = page ? page : 1;
    itemsPerPage = 2;
    startIndex = page * itemsPerPage - itemsPerPage;
    endIndex = page * itemsPerPage;
 
    let filterObj = {};

    Restraunt.find(filterObj)
    .then(response =>{
        let filteredResponse = response.slice(startIndex, endIndex);
     res.status(200).json({
        message : "Restraunt filter successfully...........!",
        Restraunt : filteredResponse
     })
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })
}



