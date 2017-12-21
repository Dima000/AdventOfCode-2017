let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

console.log('task1 test1: ' + source.firstTask('ne,ne,ne') + ' Expected result: 3')
console.log('task1 test1: ' + source.firstTask('ne,ne,sw,sw') + ' Expected result: 0')
console.log('task1 test1: ' + source.firstTask('ne,ne,s,s') + ' Expected result: 2')
console.log('task1 test1: ' + source.firstTask('se,sw,se,sw,sw') + ' Expected result: 3')

console.log('\ntask2 test1: ' + source.secondTask('ne,ne,ne') + '\nExpected   : 3')
console.log('\ntask2 test2: ' + source.secondTask('ne,ne,sw,sw') + '\nExpected   : 2')
console.log('\ntask2 test3: ' + source.secondTask('ne,ne,s,s') + '\nExpected   : 2')
console.log('\ntask2 test3: ' + source.secondTask('se,sw,se,sw,sw,se,se') + '\nExpected   : 4')
