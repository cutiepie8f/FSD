const express = require('express');    // importing express (ES5)
const route = require('./Route/index');

const app = express();                   // storing express in a variable 'app'

//Accepting and redirecting all the requests
app.use('/',route);

const Port = 8000;        // Its my port number
const Hostname = "localhost";

//Initializing my server through Express
app.listen(Port, Hostname, () =>{
    console.log(`Server is running at ${Hostname}:${Port}`)
});

