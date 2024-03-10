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
        res.status(200).json({
            message : "Restraunt fetched successfully by ID...!",
            restraunts : response
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}

//Filter

exports.getFilteredRestraunt = (req, res) =>{
    let { location , mealtype , lcost, hcost , cuisine , sort , page} = req.body;

    sort = sort ? sort : 1;   //1 - Ascending order  -1 -> Descending order
    page = page ? page : 1;   // if no page is specified, by default page-1 will be selected.

    const itemsPerPage  = 2;   // Number of restraunts in a page
    const startIndex = page * itemsPerPage - itemsPerPage;
    const endIndex = page * itemsPerPage; 
     
    var filterObj = {};    // empty object
    location && (filterObj["city"] = location);  // Inserting a location data passed from the body to the filter object.
    mealtype && (filterObj["type.mealtype"] = mealtype);  //Inserting a mealtype data passed from the body to the filter object.
    lcost  && hcost && (filterObj["cost"] = {$gte : lcost, $lte : hcost}); //Inserting a range to identify the cost of a restraunt give from the body to the filter object.
    cuisine && (filterObj["Cuisine.cuisine"] = {$in : cuisine})
    
    
    console.log(filterObj);


    Restraunt.find(filterObj).sort({cost : sort})
     .then(response=>{
        const filteredResponse = response.slice(startIndex, endIndex);
        res.status(200).json({
            message : "Restraunt filtered successfully...!",
            restraunts : filteredResponse
        })
    })
    .catch(err => {
        res.status(500).json({error: err});
    })
        
}




