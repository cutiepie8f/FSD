const express = require('express');
const mongoose = require('mongoose');
const route = require("./Route/index");

const app = express();

app.use("/", route);

const Port = 8000;
const Hostname = "localhost";

const mongoAtlas = "mongodb+srv://jayakhatke:ewK2Ni64PC6DjLiS@cluster0.iyn9gh9.mongodb.net/Zomato?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoAtlas, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
  .then((response) =>{
    app.listen(Port, Hostname, ()=>{
        console.log(`server is running at ${Hostname} : ${Port}`)
    })
  })
  .catch(err => console.log(err));
