let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

const readFile = require('../util/readFile.js')

readFile(`${dayName}.txt`, (data) => {
  let result = source.firstTask(data)
  console.log('First Task: ' + result[0])
  console.log('Second Task: ' + result[1])
})
