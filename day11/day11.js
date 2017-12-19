function firstTask (data) {
  let countMap = new Map()

  for (let dir of data.split(',')) {
    if (!countMap.has(dir)) {
      countMap.set(dir, 1)
    } else {
      countMap.set(dir, countMap.get(dir) + 1)
    }
  }
}

function secondTask (data) {

}

module.exports.firstTask = firstTask
module.exports.secondTask = secondTask
