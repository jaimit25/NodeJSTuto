const http = require('http'); //import http servre using common js
var fs = require('fs');
var index = fs.readFileSync('test.html');

// The process object is a global that provides 
//information about, and control over, the current Node.js process

// const port = process.env.PORT;

// sometimes the port is not set so we need to use || portnumber 
const port = process.env.PORT || 3000;
//basically our process is getting a port when running so we save the port 


// create server takes response and  request as parameter
const server = http.createServer((req, res) =>{
	res.StatusCode = 200;
	// console.log(req);

	//request is object so we can print particular element from the object using .objectname
	console.log(req.url);
	//our request will be served as an html page otherwhise it will be server 
	//as plain text
	res.setHeader('Content-Type', 'text/html');
	// content-type is use to tell the client which type of response sever has sent


	// we can use if else condition to show what we want to show  on some specific cond 
	//localhost:3000/about
	//localhost:3000/
	if(req.url=='/about'){
		res.end('<html><body><h1>This is About Section</h1></body></html>');
	}
	else if(req.url=='/'){
		res.end('<html><body><h1>This is Normal Section</h1></body></html>');
	}
	else{
		req.statusCode = 400;//setting it page not found
		res.end('<html><body><h1>Page Not Found</h1></body></html>');
	}
	//now we send response


	//running html page as server 
	// res.end(index);
	
})



// we have to listen to ther server to see other we wont find what going on
// we are using `` not ''
server.listen(port,()=>{
console.log(`Server is Listening on Port ${port}`);
});
