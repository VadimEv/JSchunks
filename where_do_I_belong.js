function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  function compareNumbers(a, b) {
    return a - b;
  }
  var sorted = arr.sort(compareNumbers);
  return sorted.indexOf(num);
}

getIndexToIns([2, 5, 10], 15);
