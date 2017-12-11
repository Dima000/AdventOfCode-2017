let path = require('path');
let dayName = path.basename(__filename).split('-')[0];
let source = require(`./${dayName}.js`);


let test1 = '37';
let test2 = '12';
let test3 = '1024';

console.log('test1:');
source.firstTask(test1); //result 6

console.log('test2:');
source.firstTask(test2); //result 3

console.log('test3:');
source.firstTask(test3); //result 31

// main.secondTask(test2); //result 9