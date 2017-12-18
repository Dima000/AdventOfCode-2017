function firstTask (data) {
  let lines = data.split('\n')
  let regMap = new Map()
  let highestValue = Number.MIN_SAFE_INTEGER

  for (let line of lines) {
    let parts = line.split(' if ').map(v => v.trim())

    let part1 = parts[0].split(' ')
    let part2 = parts[1].split(' ')
    let reg1 = part1[0]
    let reg2 = part2[0]

    // add missing registers
    initReg(reg1)
    initReg(reg2)

    if (evalCondition(regMap.get(reg2), part2[1], part2[2])) {
      let newRegValue = regMap.get(reg1) + (part1[1] === 'inc' ? +part1[2] : -(+part1[2]))
      regMap.set(reg1, newRegValue)
      highestValue = Math.max(highestValue, newRegValue)
    }
  }

  console.log('Task2 : ' + highestValue)
  return Array.from(regMap.values()).reduce((acc, val) => Math.max(acc, val), Number.MIN_SAFE_INTEGER)

  // help function
  function initReg (name) {
    if (!regMap.has(name)) {
      regMap.set(name, 0)
    }
  }

  function evalCondition (firstValue, sign, secondValue) {
    switch (sign) {
      case '==': return firstValue === +secondValue
      case '!=': return firstValue !== +secondValue
      case '>': return firstValue > +secondValue
      case '>=': return firstValue >= +secondValue
      case '<': return firstValue < +secondValue
      case '<=': return firstValue <= +secondValue
      default: return false
    }
  }
}

function secondTask (data) {
  return 2
}

module.exports.firstTask = firstTask
module.exports.secondTask = secondTask
