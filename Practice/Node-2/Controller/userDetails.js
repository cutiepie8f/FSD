const UserDetails = require('../Models/userDetailsDB');



exports.postUserDetails = (req, res) =>{
    const {name, mobile_number, address} = req.body;
    const userObj = new UserDetails({
        name,
        mobile_number,
        address
    });
    userObj.save()
    .then(response =>{
        res.status(200).json({
              message : "User Details Saved Successfully.......!",
              user_Details : response
        })
    })
    .catch(err =>{
        res.status(500).json({error : err})
    })
}