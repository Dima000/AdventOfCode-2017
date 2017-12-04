function firstTask(data) {
  let lines = data.split('\n');
  let parsedLines = [];

  for(let l of lines) {
  }

  let sum = 0;


  console.log(`first task: ${sum}`);
}

function secondTask(data) {
  let sum = 0;

  console.log(`second task: ${sum}`);
}



let readFile = require('../util/readFile.js');

readFile('day1-1.txt', firstTask);
readFile('day1-2.txt', secondTask);

module.exports.firstTask = firstTask;
module.exports.secondTask = secondTask;