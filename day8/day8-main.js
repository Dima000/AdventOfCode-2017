let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

const readFile = require('../util/readFile.js')

readFile(`day8.txt`, (data) => {
  console.log('First Task: ' + source.firstTask(data))
})
