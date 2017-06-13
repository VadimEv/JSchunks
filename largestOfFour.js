function largestOfFour(arr) {
  // You can do this!
  var sortedArr = [];
  var largest = [];
  for (i = 0; i < arr.length; i++) {
    sortedArr[i] = arr[i].sort(function(a, b){
    return a - b;
  }
);
  largest.push(sortedArr[i].pop());
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
