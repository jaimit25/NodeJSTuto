const fs = require('fs');


console.log(fs.readFile('file.txt', 'utf8',(err, data) => {
console.log(err,data);
}));
console.log('this may prints before the reading of above file because node js works on non blocking model once file is ready it will print it similar to flutter ');




const b = fs.readFileSync('test.html');

//sync function will make it run in synchronous way
const a  = fs.readFileSync('file.txt', 'utf8',(err, data) => {
	console.log(err,data);
	});
	
console.log(a);

console.log('finish reading file');




fs.writeFile("file2.txt","hi there this file is written during compile time",()=>{
console.log("this code is printed once file is written");
}
);