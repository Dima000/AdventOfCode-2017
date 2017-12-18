let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

let test1 = '0 2 7 0'

console.log('test1:')
source.firstTask(test1) // result 5

console.log('test2:')
source.secondTask(test1) // result 4
