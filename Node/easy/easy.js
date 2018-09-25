// EASY: Create a node application that will read all of the planets in the solar system from a text file and print them to the console.

var fs = require('fs');
var content = fs.readFileSync('./easy.txt', 'utf8');
console.log(content);