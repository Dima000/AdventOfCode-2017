let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

let test1 = '0\n' + '3\n' + '0\n' + '1\n' + '-3'
// let test2 = 'a ab abc abd abf abj'
// let test3 = 'oiii ioii iioi iiio'

console.log('test1:')
source.firstTask(test1) // result 1

// console.log('test2:');
// main.secondTask(test2); //result 1
//
// console.log('test3:');
// main.secondTask(test3); //result 0
