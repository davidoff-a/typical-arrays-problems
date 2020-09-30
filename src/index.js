exports.avg = avg;
exports.max = max;
exports.min = min;

function avg(array = []) { 
  const length = array.length;
  return length === 0
    ? 0 
    : array.reduce((sum, num) => sum + num, 0) / length;
}

function max(array) {
  return getFirst(array, (a, b) => b - a);
}

function min(array) {
  return getFirst(array, (a, b) => a - b)
}

function getFirst(array = [], sortRule) {
  const [first = 0, ...rest] = array.sort(sortRule);
  return first;
}
// exports.min = function min (array=[]) {
//   const arr = array.sort(a,b=>b-a);
//   return arr[0]||0;
// }

// exports.max = function max (array=[]) {
//   const arr = array.sort(a,b=>a-b);
//   return arr[0]||0;
// }

// exports.avg = function avg (array=[]) {
//   return 0;
// }

