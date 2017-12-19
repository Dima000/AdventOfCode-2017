function firstTask (data) {
  let nrs = data.split('\n').map(v => +v)
  let i = 0
  let steps = 0

  while (i >= 0 && i < nrs.length) {
    let nextIndex = i + nrs[i]
    nrs[i]++
    i = nextIndex
    steps++
  }

  console.log(`first task: ${steps}`)
}

function secondTask (data) {
  let nrs = data.split('\n').map(v => +v)
  let i = 0
  let steps = 0

  while (i >= 0 && i < nrs.length) {
    let nextIndex = i + nrs[i]
    nrs[i] >= 3 ? nrs[i]-- : nrs[i]++
    i = nextIndex
    steps++
  }
  console.log(`second task: ${steps}`)
}

module.exports.firstTask = firstTask
module.exports.secondTask = secondTask
