function firstTask (data) {
  let towerStore = new Map()
  const allChildren = new Set()
  let allTowers = new Set()
  let maxLevel = -1

  parseTowers(data.split('\n'))

  // first task
  let topTower = Array.from(allTowers.values()).filter(x => !allChildren.has(x))[0]
  console.log('First task: ' + topTower)

  // second task
  let diff = null
  let checkedTowers = new Set()
  let allTowersArray = Array.from(towerStore.values())

  computeTowerWeights(topTower, 1, null)

  while (maxLevel > 1 && !diff) {
    let towersToCheck = allTowersArray.filter(tower => tower.level === maxLevel)

    Array.from(towersToCheck).forEach(tower => {
      if (!checkedTowers.has(tower.key)) {
        findIfUnbalancedValue(checkedTowers, tower)
      }
    })

    maxLevel--
  }

  console.log('Second task:\n' + diff[1].join() + '\n' + diff[2].join())

  // help functions
  function findIfUnbalancedValue (checkedTowers, tower) {
    let parent = towerStore.get(tower.parentKey)

    let childrenWeights = parent.children.map(childKey => towerStore.get(childKey).weight)
    let allEqual = _.uniq(childrenWeights).length <= 1

    if (allEqual) {
      parent.children.forEach(towerKey => {
        checkedTowers.add(towerKey)
      })
    } else {
      diff = []
      diff[1] = parent.children.map(childKey => towerStore.get(childKey).initialWeight)
      diff[2] = parent.children.map(childKey => towerStore.get(childKey).weight)
    }
  }

  function computeTowerWeights (towerKey, level, parentKey) {
    let tower = towerStore.get(towerKey)
    // process tower
    tower.level = level
    tower.parentKey = parentKey
    maxLevel = Math.max(maxLevel, level)

    if (!tower.children.length) {
      return tower.weight
    }

    tower.children.forEach(childKey => {
      computeTowerWeights(childKey, level + 1, tower.key)
    })

    tower.weight = tower.children.reduce((acc, childKey) => {
      return acc + towerStore.get(childKey).weight
    }, tower.weight)
  }

  function parseTowers (lines) {
    for (let l of lines) {
      let parts = l.split('->')
      let objectProperties = parts[0].split(' ')
      let children = parts[1] ? parts[1].trim().split(',').map(v => v.trim()) : []

      let tower = {
        key: objectProperties[0],
        initialWeight: +objectProperties[1].match(/\d+/g)[0],
        weight: +objectProperties[1].match(/\d+/g)[0],
        children: children
      }

      towerStore.set(tower.key, tower)

      children.forEach(item => {
        allChildren.add(item)
      })
      allTowers.add(tower.key)
    }
  }
}

let _ = require('lodash')

module.exports.firstTask = firstTask
