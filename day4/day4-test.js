let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

let test1 = 'iiii oiii ooii oooi oooo'
let test2 = 'a ab abc abd abf abj'
let test3 = 'oiii ioii iioi iiio'

console.log('test1:')
source.secondTask(test1) // result 1

console.log('test2:')
source.secondTask(test2) // result 1

console.log('test3:')
source.secondTask(test3) // result 0
