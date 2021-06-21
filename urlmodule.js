import url from 'url'; //using ES6
// const url = require('url'); //using common js

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e'; //it will help you get particular part from the data
myURL.hash = '#fgh'; //it will help you to Navigate particular section of url or page 


console.log(myURL);
console.log("printing final url");
console.log(myURL);