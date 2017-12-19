let path = require('path')
let dayName = path.basename(__filename).split('-')[0]
let source = require(`./${dayName}.js`)

const readFile = require('../util/readFile.js')

readFile(`${dayName}.txt`, (data) => {
  source.firstTask(data)
})
