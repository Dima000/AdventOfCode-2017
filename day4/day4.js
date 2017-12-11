function firstTask(data) {
  let lines = data.split('\n');

  let sum = lines.reduce((sum, value) => {
    let keys = value.split(' ');
    return sum + (new Set(keys).size === keys.length ? 1 : 0);
  }, 0);

  console.log(`first task: ${sum}`);
}

function secondTask(data) {
  let lines = data.split('\n');

  let sum = lines.reduce((sum, value) => {
    let keys = value.split(' ');
    let sets = keys.map(value => new Set(value));

    let valid = 1;
    for (let i = 0; i < sets.length - 1; i++) {
      if (!valid) break;
      for (let j = i + 1; j < sets.length; j++) {
        if (_.isEqual(sets[i], sets[j])) {
          valid = 0;
          break;
        }
      }
    }

    return sum + valid;
  }, 0);


  console.log(`second task: ${sum}`);
}

const _ = require("lodash");
const readFile = require('../util/readFile.js');

readFile('day4-1.txt', firstTask);
readFile('day4-1.txt', secondTask);

module.exports.firstTask = firstTask;
module.exports.secondTask = secondTask;