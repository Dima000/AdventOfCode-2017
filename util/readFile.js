let fs = require('fs')
let filenamePath = '../inputs/'

function readFile (fileName, successCallback) {
  return fs.readFile(filenamePath + fileName, 'utf8', function (err, data) {
    if (err) {
      console.log(err)
    }

    successCallback(data)
  })
}

module.exports = readFile
