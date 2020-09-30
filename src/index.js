
exports.min = function min (array=[]) {
  let min=1000000;
  for (let i=0; i<array.length;i++){
      if (min>array[i]){
          min=array[i];
      }
  }
  return min||0;
}

exports.max = function max (array=[]) {
  let max=0;
  for (let i=0; i<array.length;i++){
      if (max<array[i]){
          max=array[i];
      }
  }
  return max||0;
}

exports.avg = function avg (array=[]) {
  let sum=0;
  for (let i=0; i<array.length; i++){
    sum+=array[i];
  }

  return sum/array.length||0;
}

