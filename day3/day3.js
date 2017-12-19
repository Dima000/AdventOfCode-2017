function firstTask (data) {
  let nr = +data
  let n = 0
  let sum = 1

  while (sum < nr) {
    n++
    sum += n * 8
  }

  let stepsOnCircle = Math.abs((sum - nr) % (2 * n) - n)
  return n + stepsOnCircle
}

function secondTask (data) {
  let N = 500
  let max = 0
  let x = 0
  let y = 0

  let matrix = math.zeros(2 * N, 2 * N)
  matrix.set([N - x, N - y], 1)

  while (true) {
    setNextIndex()
    let newIndexValue = getNeighboursSum()
    matrix.set([N - x, N - y], newIndexValue)

    if (newIndexValue > +data) {
      return newIndexValue
    }
  }

  function getNeighboursSum () {
    let sum = 0
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (!i && !j) continue
        sum += matrix.get([N - (x + i), N - (y + j)])
      }
    }

    return sum
  }

  function setNextIndex () {
    if (x === max && y === -max) {
      x++
      max++
    } else if (x === max && y < max) {
      y++
    } else if (x > -max && y === max) {
      x--
    } else if (x === -max && y > -max) {
      y--
    } else if (x < max && y === -max) {
      x++
    }
  }
}

const math = require('mathjs')

module.exports.firstTask = firstTask
module.exports.secondTask = secondTask
