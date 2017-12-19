function firstTask (data) {
  let totalScore = 0
  let scoreInc = 1
  let garbageCount = 0

  let isNegation = false
  let isGarbage = false

  for (let char of data) {
    // handle negation
    if (isNegation) {
      isNegation = false
      continue
    }
    if (char === '!') {
      isNegation = true
      continue
    }

    // handle garbage
    if (!isGarbage && char === '<') {
      isGarbage = true
      continue
    } else if (isGarbage && char === '>') {
      isGarbage = false
      continue
    } else if (isGarbage) {
      garbageCount++
      continue
    }

    // handle groups
    if (char === '{') {
      totalScore += scoreInc
      scoreInc++
    } else if (char === '}') {
      scoreInc--
    }
  }

  return [totalScore, garbageCount]
}

module.exports.firstTask = firstTask
