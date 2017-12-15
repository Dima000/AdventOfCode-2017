let path = require('path');
let dayName = path.basename(__filename).split('-')[0];
let source = require(`./${dayName}.js`);

let test1 =
    'pbga (66)\n' +
    'xhth (57)\n' +
    'ebii (61)\n' +
    'havc (66)\n' +
    'ktlj (57)\n' +
    'fwft (72) -> ktlj, cntj, xhth\n' +
    'qoyq (66)\n' +
    'padx (45) -> pbga, havc, qoyq\n' +
    'tknk (41) -> ugml, padx, fwft\n' +
    'jptl (61)\n' +
    'ugml (68) -> gyxo, ebii, jptl\n' +
    'gyxo (61)\n' +
    'cntj (57)';

console.log('test1:'); //first task: tknk    //second task: 8
source.firstTask(test1);
