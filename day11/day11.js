let dirMap = {
  n: {opposite: 's', merge1: {helper: 'se', target: 'ne'}, merge2: {helper: 'sw', target: 'nw'}},
  ne: {opposite: 'sw', merge1: {helper: 's', target: 'se'}, merge2: {helper: 'nw', target: 'n'}},
  se: {opposite: 'nw', merge1: {helper: 'n', target: 'ne'}, merge2: {helper: 'sw', target: 's'}},
  s: {opposite: 'n', merge1: {helper: 'nw', target: 'sw'}, merge2: {helper: 'ne', target: 'se'}},
  sw: {opposite: 'ne', merge1: {helper: 'se', target: 's'}, merge2: {helper: 'n', target: 'nw'}},
  nw: {opposite: 'se', merge1: {helper: 'ne', target: 'n'}, merge2: {helper: 's', target: 'sw'}}
}

function firstTask (data) {
  let stepsMap = new Map()

  populateMap(stepsMap, data)
  return shortestPath(stepsMap)
}

function secondTask (data) {
  let maxShortest = Number.MIN_SAFE_INTEGER
  let stepsMap = new Map()
  initMap(stepsMap)

  for (let dir of data.split(',')) {
    stepsMap.set(dir, stepsMap.get(dir) + 1)

    let shortest = shortestPath(_.clone(stepsMap))
    maxShortest = Math.max(shortest, maxShortest)
  }

  return maxShortest
}

function shortestPath (stepsMap) {
  while (canReduce(stepsMap)) {
    let dir = minStepsDir(stepsMap)

    if (stepsMap.get(dirMap[dir].opposite)) {
      reduceValues(dir, dirMap[dir].opposite, stepsMap)
    } else {
      mergeValues(dir, dirMap[dir].merge1.helper, dirMap[dir].merge1.target, stepsMap)
      mergeValues(dir, dirMap[dir].merge2.helper, dirMap[dir].merge2.target, stepsMap)
    }
  }

  return Array.from(stepsMap.values()).reduce((acc, value) => acc + value, 0)
}

function populateMap (stepsMap, data) {
  initMap(stepsMap)

  for (let dir of data.split(',')) {
    stepsMap.set(dir, stepsMap.get(dir) + 1)
  }
}

function initMap (stepsMap) {
  stepsMap.set('n', 0)
  stepsMap.set('ne', 0)
  stepsMap.set('se', 0)
  stepsMap.set('s', 0)
  stepsMap.set('sw', 0)
  stepsMap.set('nw', 0)
}

function reduceValues (keyA, keyB, map) {
  let valA = map.get(keyA)
  let valB = map.get(keyB)
  let reduceBy = Math.min(valA, valB)

  map.set(keyA, valA - reduceBy)
  map.set(keyB, valB - reduceBy)
}

function mergeValues (keyA, keyB, keyC, map) {
  let valA = map.get(keyA)
  let valB = map.get(keyB)
  let mergeBy = Math.min(valA, valB)

  map.set(keyA, valA - mergeBy)
  map.set(keyB, valB - mergeBy)
  map.set(keyC, mergeBy + map.get(keyC))
}

// return direction that has fewest steps
function minStepsDir (stepsMap) {
  let dir = null
  let minValue = Number.MAX_SAFE_INTEGER

  for (let [key, value] of stepsMap) {
    if (value && value < minValue) {
      dir = key
      minValue = value
    }
  }

  return dir
}

// the grid can be simplified to be left with max 2 directions
// the directions have to be near each other
function canReduce (stepsMap) {
  let mapValues = []
  let directions = []

  for (let [key, val] of stepsMap) {
    if (val) {
      mapValues.push(val)
      directions.push(key)
    }
  }

  if (mapValues.length <= 1) {
    return false
  } else if (mapValues.length === 2) {
    let dir = dirMap[directions[0]]
    // adjacent directions
    return !(dir.merge1.target === directions[1] || dir.merge2.target === directions[1])
  }

  return true
}

const _ = require('lodash')

module.exports.firstTask = firstTask
module.exports.secondTask = secondTask
