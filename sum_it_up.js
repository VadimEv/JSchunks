function sumAll(arr) {
var arrM = arr;
var result = 0;
var max = arrM.reduce(function(a, b) {
    return Math.max(a, b);
});
var min = arrM.reduce(function(a, b) {
    return Math.min(a, b);
});
console.log(min, max) ;
  for (i=min; i <= max; i++){
    result +=i;
  }
 return result;
}

sumAll([4, 1]);
