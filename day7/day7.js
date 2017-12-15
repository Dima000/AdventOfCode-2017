function firstTask(data) {
  let towerStore = new Map(),
      allChildren = new Set(),
      allTowers = new Set();

  parseTowers(data.split('\n'));

  // first task
  let topTower = Array.from(allTowers.values()).filter(x => !allChildren.has(x))[0];
  console.log('First task: ' + topTower);

  //second task
  let diff = null;
  computeTowerWeights(topTower);
  findUnbalancedValue(topTower);
  console.log('Second task: ' + diff);


  // functions
  function findUnbalancedValue(towerKey) {
    let tower = towerStore.get(towerKey);

    let childrenWeights = tower.children.map(childKey => towerStore.get(childKey).weight);
    let allEqual = _.uniq(childrenWeights).length <= 1;

    if (allEqual && !diff) {
      tower.children.forEach(childKey => {
        findUnbalancedValue(childKey);
      });
    } else {
      let uniqValues = _.uniq(childrenWeights);
      diff = Math.abs(uniqValues[0] - uniqValues[1]);
    }
  }

  function computeTowerWeights(towerKey) {
    let tower = towerStore.get(towerKey);

    if (!tower.children.length) {
      return tower.weight;
    }

    tower.children.forEach(childKey => {
      computeTowerWeights(childKey)
    });

    return tower.children.reduce((acc, childKey) => {
      return acc + towerStore.get(childKey).weight;
    }, tower.weight);
  }

  function parseTowers(lines) {
    for (let l of lines) {
      let parts = l.split('->');
      let objectProperties = parts[0].split(' ');
      let children = parts[1] ? parts[1].trim().split(',').map(v => v.trim()) : [];

      let tower = {
        key: objectProperties[0],
        weight: +objectProperties[1].match(/\d+/g)[0],
        children: children
      };

      towerStore.set(tower.key, tower);

      children.forEach(item => {
        allChildren.add(item);
      });
      allTowers.add(tower.key);
    }
  }

}

let _ = require('lodash');

module.exports.firstTask = firstTask;