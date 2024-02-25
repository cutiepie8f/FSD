const express = require('express');
const mongoose = require('mongoose');  //imported the mongoose package(MongoDB)
const route = require('./Route/index');

const app = express();

app.use(express.json()); // using the json parse function of express
app.use('/', route);

const Port = 8000;
const Hostname = "localhost";
const localDbUrl = "mongodb://127.0.0.1:27017/Zomato";  // local mongoDB URL 

mongoose.connect(localDbUrl, {          // created mongoDB server connection
    useNewUrlParser : true,
     useUnifiedTopology : true
})
    .then(res=>{
        app.listen(Port, Hostname, ()=>{
            console.log(`Server is running at ${Hostname} : ${Port}`)
        });
    })
    .catch(err=> console.log(err));
