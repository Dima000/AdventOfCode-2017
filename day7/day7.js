function firstTask(data) {
  let lines = data.split('\n');
  let store = new Map();

  let allChildren = new Set();
  let allTowers = new Set();

  for (let l of lines) {
    let parts = l.split('->');
    let objectProperties = parts[0].split(' ');
    let children = parts[1] ? parts[1].trim().split(',') : [];

    let tower = {
      key: objectProperties[0],
      weight: objectProperties[1].search(/\d+/g),
      children: children
    };

    store.set(tower.key, tower);

    if(children.length) {
      allChildren.add([...children]);
    }
    allTowers.add(tower.key);
  }


  let difference = [...allTowers].filter(x => !allChildren.has(x));
  return difference;
}

function secondTask(data) {


  return 2;
}

let _ = require('lodash');

module.exports.firstTask = firstTask;
module.exports.secondTask = secondTask;