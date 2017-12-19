function firstTask (data, N) {
  let lengths = data.split(',').map(v => +v)
  let hashArray = math.range(0, N).toArray()

  let currentPos = 0
  let skipSize = 0

  gameLoop(hashArray, lengths, currentPos, skipSize)

  return hashArray[0] * hashArray[1]
}

function secondTask (data, N) {
  let hashArray = math.range(0, N).toArray()
  let currentPos = 0
  let skipSize = 0

  // get lengths
  let asciiData = [...data].map(v => v.charCodeAt(0))
  let lengths = [...asciiData, 17, 31, 73, 47, 23]

  // 64 game loops
  for (let i = 0; i < 64; i++) {
    let state = gameLoop(hashArray, lengths, currentPos, skipSize)
    currentPos = state[0]
    skipSize = state[1]
  }

  // dense hash
  let denseHash = []
  for (let i = 0; i < 16; i++) {
    let hashValue = hashArray[16 * i]
    for (let j = 1; j < 16; j++) {
      hashValue ^= hashArray[16 * i + j]
    }
    denseHash.push(hashValue)
  }

  // to hexadecimal
  let hexaResult = []
  for (let nr of denseHash) {
    let hexaNr = nr.toString(16)
    hexaResult.push(hexaNr.length === 1 ? `0${hexaNr}` : hexaNr)
  }

  return hexaResult.join('')
}

function gameLoop (hashArray, lengths, currentPos, skipSize) {
  for (let length of lengths) {
    reverseArray(hashArray, currentPos, length)

    currentPos += (skipSize + length)
    currentPos %= hashArray.length

    skipSize++
  }

  return [currentPos, skipSize]
}

function reverseArray (hashArray, start, length) {
  let N = hashArray.length
  let end = (start + length) % N
  end = end === 0 ? N - 1 : end - 1

  for (let i = 0; i < length / 2; i++) {
    let aux = hashArray[start]
    hashArray[start] = hashArray[end]
    hashArray[end] = aux

    start = ++start % N
    end === 0 ? (end = N - 1) : end--
  }
}

const math = require('mathjs')
module.exports.firstTask = firstTask
module.exports.secondTask = secondTask
