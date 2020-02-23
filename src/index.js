
exports.min = function min (array) {
    if (array == null||array.length == 0) {
        return 0;
    }
  array.sort(compareNumeric);
  return array[0];
}

exports.max = function max (array) {
    if (array == null||array.length == 0) {
        return 0;
    }
    array.sort(compareNumeric);
  return array[array.length-1];
}

exports.avg = function avg (array) {
    if (array == null||array.length == 0) {
        return 0;
    }
    res = 0;
    for (i=0; i<array.length; i++) {
        res = res + array[i];
    }
  return res/array.length;
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
