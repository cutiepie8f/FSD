//OS Module
// var os = require('os');
// console.log('Type : '+os.type()); // import a core package (using ES5)

import os from 'os';
//OS Type
console.log('Type : '+os.type());   // import a core package (using ES6)
//OS Platform
console.log('Platform : '+os.platform());
//OS Architecture
console.log('Architecture : '+os.arch());
//OS Release 
console.log('Release : '+os.release());
//Total Memory
console.log('Total Memory : '+os.totalmem()+' Bytes');
//Free Memory
console.log('Free Memory : '+os.freemem()+' Bytes');

//FS Module
// Commonly known as a File Module:
    // Create File
    // Read File
    // Update File
    // Rename File
    // Delete File

// var fs = require('fs');    // import a core package (using ES5)
import fs from 'fs';         //// import a core package (using ES6)
// create  file
fs.writeFileSync('sample.txt','Greetings from Edureka..........!'); // create a file ,give a file name and with a data in it.
console.log("File is created");

//Read a file
var data = fs.readFileSync("sample.txt");   //Reading the file and storing it in a variable
console.log("Content of the file : "+data);  // printing the variable which contains the content of the file.

//Update a file
fs.appendFileSync("sample.txt", "Welcome to Node Session");
console.log("File successfully updated...!");

var data = fs.readFileSync("sample.txt");   //Reading the file and storing it in a variable
console.log("Content of the file : "+data); 

//Rename a file
fs.renameSync("sample.txt","samplefile.txt");  //Renaming an existing file with a new name and format
console.log("File successfully renamed..!");

var data = fs.readFileSync("samplefile.txt");   //Reading the file and storing it in a variable
console.log("Content of the file : "+data); 

// Delete a file 
fs.unlinkSync("samplefile.txt");                // Delete a file
console.log("File successfully deleted....!");

//HTTP Module
import http from 'http';
http.createServer(function(req,res){              // created an HTTP Server
    res.writeHead(200,{'content-type':'text/plain'}); // response type '200-> success/ok'
    res.write('Welcome to the edureka...!');         //Output file needs to printed with this text.
    res.end();                                         // End of response
}).listen(8000);
// port no. - 8800, 8000, 8080, 5500 (Except to 3000)