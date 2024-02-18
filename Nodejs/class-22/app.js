const express = require('express');     // importing express (ES5)
const route = require('./Route/index');

const app = express();                      // Storing express in a variable 'app'

// Accepting and Redirecting all the Requests
app.use('/', route);

const Port = 8000;              // Its my port number
const Hostname = "localhost";

// Initializing my Server through Express
app.listen(Port, Hostname, () =>{
    console.log(`Server is Running at ${Hostname}: ${Port}`)
});