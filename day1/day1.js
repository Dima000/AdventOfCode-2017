function firstTask(data) {
  let sum = 0;
  let last = data[data.length - 1];

  for (let i = 0; i < data.length; i++) {
    sum += last === data[i] ? +data[i] : 0;
    last = data[i];
  }

  console.log(`first task: ${sum}`);
}

function secondTask(data) {
  let sum = 0,
      n = data.length,
      offset = n / 2;

  for (let i = 0; i < n; i++) {
    sum += data[i] === data[(i + offset) % n] ? +data[i] : 0;
  }

  console.log(`second task: ${sum}`);
}

module.exports.firstTask = firstTask;
module.exports.secondTask = secondTask;