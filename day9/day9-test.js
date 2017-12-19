let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

let test1 = '{{<!!>},{<!!>},{<!!>},{<!!>}}' // 9
let test2 = '{{<a!>},{<a!>},{<a!>},{<ab>}}' // 3
let test3 = '{{<ab>},{<ab>},{<ab>},{<ab>}}' // 9

console.log('task1 test1: ' + source.firstTask(test1)[0] + ' Expected result: 9')
console.log('task1 test2: ' + source.firstTask(test2)[0] + ' Expected result: 3')
console.log('test1 test3: ' + source.firstTask(test3)[0] + ' Expected result: 9')
console.log()

let test4 = '<random characters>' // 17
let test5 = '<!!!>>' // 0
let test6 = '<{o"i!a,<{i<a>' // 10

console.log('task2 test1: ' + source.firstTask(test4)[1] + ' Expected result: 17')
console.log('task2 test2: ' + source.firstTask(test5)[1] + ' Expected result: 0')
console.log('task2 test3: ' + source.firstTask(test6)[1] + ' Expected result: 10')
