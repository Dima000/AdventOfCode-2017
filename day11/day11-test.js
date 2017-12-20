let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

console.log('task1 test1: ' + source.firstTask('ne,ne,ne') + ' Expected result: 3')
console.log('task1 test1: ' + source.firstTask('ne,ne,sw,sw') + ' Expected result: 0')
console.log('task1 test1: ' + source.firstTask('ne,ne,s,s') + ' Expected result: 2')
console.log('task1 test1: ' + source.firstTask('se,sw,se,sw,sw') + ' Expected result: 3')

// console.log('\ntask2 test1: ' + source.secondTask('', 256) + '\nExpected   : a2582a3a0e66e6e86e3812dcb672a272')
// console.log('\ntask2 test2: ' + source.secondTask('AoC 2017', 256) + '\nExpected   : 33efeb34ea91902bb2f59c9920caa6cd')
// console.log('\ntask2 test3: ' + source.secondTask('1,2,3', 256) + '\nExpected   : 3efbe78a8d82f29979031a4aa0b16a9d')
// console.log('\ntask2 test3: ' + source.secondTask('1,2,4', 256) + '\nExpected   : 63960835bcdc130f0b66d7ff4f6a5a8e')
