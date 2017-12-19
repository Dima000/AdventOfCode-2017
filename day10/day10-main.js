let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

const readFile = require('../util/readFile.js')

readFile(`${dayName}.txt`, (data) => {
  console.log('First Task: ' + source.firstTask(data, 256))
  console.log('Second Task: ' + source.secondTask(data, 256))
})
