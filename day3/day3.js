function firstTask(data) {
  let nr = +data;
  let n = 0;
  let sum = 1;

  while (sum < nr) {
    n++;
    sum += n * 8;
  }

  let stepsOnCircle = Math.abs((sum - nr) % (2 * n) - n);
  let steps = n + stepsOnCircle;

  console.log(`first task: ${steps}`);
}

function secondTask(data) {
  let sum = 0;


  console.log(`second task: ${sum}`);
}


let readFile = require('../util/readFile.js');

readFile('day3-1.txt', firstTask);
// readFile('day3-2.txt', secondTask);

module.exports.firstTask = firstTask;
module.exports.secondTask = secondTask;