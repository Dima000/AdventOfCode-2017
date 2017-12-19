function firstTask (data) {
  let sum = 0
  let lines = data.split('\n')

  for (let l of lines) {
    let lineNumbers = l.match(/\d+/g)

    let min = Math.min(...lineNumbers)
    let max = Math.max(...lineNumbers)

    sum += max - min
  }

  console.log(`first task: ${sum}`)
}

function secondTask (data) {
  let sum = 0
  let lines = data.split('\n')

  for (let l of lines) {
    let found = false
    let lineNumbers = l.match(/\d+/g).sort((a, b) => b - a)

    for (let i = 0; i < lineNumbers.length - 1; i++) {
      if (found) break
      for (let j = i + 1; j < lineNumbers.length; j++) {
        if (lineNumbers[i] % lineNumbers[j] === 0) {
          sum += lineNumbers[i] / lineNumbers[j]
          found = true
          break
        }
      }
    }
  }

  console.log(`second task: ${sum}`)
}

module.exports.firstTask = firstTask
module.exports.secondTask = secondTask
