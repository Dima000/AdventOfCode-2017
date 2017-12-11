let main = require('./day4.js');

let test1 = 'iiii oiii ooii oooi oooo';
let test2 = 'a ab abc abd abf abj';
let test3 = 'oiii ioii iioi iiio';

console.log('test1:');
main.secondTask(test1); //result 1

console.log('test2:');
main.secondTask(test2); //result 1

console.log('test3:');
main.secondTask(test3); //result 0