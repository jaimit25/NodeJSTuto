//module wrapper 
//javascript wraps the code automatically into this function
// (function(exports,require,__filename, __dirname){

const { Console } = require("console");

// access content from one file to another
data = { 
	name: 'Jaimit',
	Number: '123456',
	favnum : 90,
}
console.log(exports,require,__filename, __dirname);
module.exports = data;

// require is use to use the object 
// and export is use to export the object to other file so we can use it anywhere

// })