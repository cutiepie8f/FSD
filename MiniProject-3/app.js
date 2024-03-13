const express = require('express');
const mongoose = require('mongoose');


const route = require('./Route/index');



//Request Management
const app = express();
app.use(express.json());   // A body parser required to post a data
app.use('/', route);


const Port = 8000;
const Hostname = "localhost";

//const localDbUrl = "mongodb://127.0.0.1:27017/Zomato";

//DB
const MongoAtlas = "mongodb+srv://jayakhatke:ewK2Ni64PC6DjLiS@cluster0.iyn9gh9.mongodb.net/VideoStreaming?retryWrites=true&w=majority&appName=Cluster0";
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