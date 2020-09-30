
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
//   let min=1000000;
//   for (let i=0; i<array.length;i++){
//       if (min>array[i]){
//           min=array[i];
//       }
//   }
//   return min||0;
// }

// exports.max = function max (array=[]) {
//   let max=0;
//   for (let i=0; i<array.length;i++){
//       if (max<array[i]){
//           max=array[i];
//       }
//   }
//   return max||0;
// }

// exports.avg = function avg (array=[]) {
//   let sum=0;
//   for (let i=0; i<array.length; i++){
//     sum+=array[i];
//   }

//   return sum/array.length||0;
// }

