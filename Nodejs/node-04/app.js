const express = require('express');
const route = require("./Route/index")

const app = express();

app.use("/", route);

const Port = 8000;
const Hostname = "localhost";

app.listen(Port, Hostname, ()=>{
    console.log(`Server is running at ${Hostname} : ${Port}`)
});

