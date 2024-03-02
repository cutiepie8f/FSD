const express = require('express');
const mongoose = require('mongoose');  //imported the mongoose package(MongoDB)
const route = require('./Route/index');

const app = express();

app.use(express.json()); // using the json parse function of express
app.use('/', route);

const Port = 8000;
const Hostname = "localhost";
//const localDbUrl = "mongodb://127.0.0.1:27017/Zomato";  // local mongoDB URL 

const atlas = "mongodb+srv://jayakhatke:ewK2Ni64PC6DjLiS@cluster0.iyn9gh9.mongodb.net/Zomato?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(atlas, {          // created mongoDB server connection
    useNewUrlParser : true,
     useUnifiedTopology : true
})
    .then(res=>{
        app.listen(Port, Hostname, ()=>{
            console.log(`Server is running at ${Hostname} : ${Port}`)
        });
    })
    .catch(err=> console.log(err));
