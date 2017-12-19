let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

let test1 = '3,4,1,5' // 12

console.log('task1 test1: ' + source.firstTask(test1, 5) + ' Expected result: 12')

console.log('\ntask2 test1: ' + source.secondTask('', 256) + '\nExpected   : a2582a3a0e66e6e86e3812dcb672a272')
console.log('\ntask2 test2: ' + source.secondTask('AoC 2017', 256) + '\nExpected   : 33efeb34ea91902bb2f59c9920caa6cd')
console.log('\ntask2 test3: ' + source.secondTask('1,2,3', 256) + '\nExpected   : 3efbe78a8d82f29979031a4aa0b16a9d')
console.log('\ntask2 test3: ' + source.secondTask('1,2,4', 256) + '\nExpected   : 63960835bcdc130f0b66d7ff4f6a5a8e')
