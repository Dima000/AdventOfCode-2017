function firstTask(data) {
  let memoryNrs = data.match(/\d+/g).map(v => +v);
  let states = [];
  let steps = 1;

  while (true) {
    let index = maxIndex(memoryNrs);
    let blocksInMemory = memoryNrs[index];

    //redistribute blocks
    memoryNrs[index] = 0;
    index++;
    while (blocksInMemory > 0) {
      memoryNrs[index % memoryNrs.length]++;
      index++;
      blocksInMemory--;
    }

    //check if similar state was reached
    let exists = states.find(state => _.isEqual(state, memoryNrs));
    if (!exists) {
      let newState = _.cloneDeep(memoryNrs);
      states.push(newState);
    } else {
      break;
    }

    steps++;
  }


  console.log(`first task: ${steps}`);
}

function secondTask(data) {
  let memoryNrs = data.match(/\d+/g).map(v => +v);
  let states = [];
  let steps = 0;
  let stateWasFound = false;
  let loopState = null;

  while (true) {
    let index = maxIndex(memoryNrs);
    let blocksInMemory = memoryNrs[index];

    //redistribute blocks
    memoryNrs[index] = 0;
    index++;
    while (blocksInMemory > 0) {
      memoryNrs[index % memoryNrs.length]++;
      index++;
      blocksInMemory--;
    }

    //check if state reached second time
    if (stateWasFound) {
      steps++;
      if (_.isEqual(loopState, memoryNrs)) break;
    } else {
      //check if similar state was reached
      let exists = states.find(state => _.isEqual(state, memoryNrs));
      let newState = _.cloneDeep(memoryNrs);

      if (!exists) {
        states.push(newState);
      } else {
        stateWasFound = true;
        loopState = newState;
      }
    }

  }

  console.log(`second task: ${steps}`);
}

function maxIndex(nrs) {
  return nrs.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
}

let _ = require('lodash');

module.exports.firstTask = firstTask;
module.exports.secondTask = secondTask;