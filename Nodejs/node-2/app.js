import http from 'http'; // calling the http core package(ES6)

http.createServer((req,res) => {
    if(req.url == '/location')
    {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({
        location:[
            {id: 1, locationName: 'Delhi'},
            {id: 2, locationName: 'Kolkata'},
            {id: 3, locationName: 'Bengaluru'},
            {id: 4, locationName: 'Ahmedabad'},
        ]
    }))
}else if(req.url == '/meal'){
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({
        meal:[
            {id: 1, mealName: 'Burger'},
            {id: 2, mealName: 'Pizza'},
            {id: 3, mealName: 'Sandwich'},
            {id: 4, mealName: 'Pasta'},
        ]
    }))
}
else if(req.url == '/restraunt'){
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({
        restraunt:[
            {id: 1, restrauntName: 'MacD'},
            {id: 2, restrauntName: 'Dominos'},
            {id: 3, restrauntName: 'Burger King'},
            {id: 4, restrauntName: 'Subway'},
        ]
    }))
}
else{
    res.statusCode = 404;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({response: "No Data Found"}));
}
}).listen(8000);

// status code in http request

    // -> 400      = Unauthorized Access
    // -> 404      = Resource not found
    // -> 500      = Server Not Responding

// format for installing a Node Package from NPM:
      // npm [i/install] [package_name][if required a specific version{@version}]
