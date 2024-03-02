const express = require('express');
const mongoose = require('mongoose');

const route = require('./Route/index');

const app = express();

app.use(express.json());
app.use('/', route);

const Port = 8000;
const Hostname = "localhost";

//const localDbUrl = "mongodb://127.0.0.1:27017/Zomato";
const MongoAtlas = "mongodb+srv://jayakhatke:ewK2Ni64PC6DjLiS@cluster0.iyn9gh9.mongodb.net/Zomato?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(MongoAtlas, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
   .then(res=>
    app.listen(Port, Hostname, () =>{
        console.log(`server is running at ${Hostname} : ${Port}`)
    })
   )
   .catch(err => console.log(err));