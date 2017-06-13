function smallestCommons(arr) {
  var range = [];
  var max = arr.reduce(function(a, b) {return Math.max(a, b);});
  var min = arr.reduce(function(a, b) {return Math.min(a, b);});
  for(var i = min; i <= max; i++){
    range.push(i);
  }
  function gcd(a,b){
    var temp;
    while (b !== 0){
      temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  function lcm(a,b){
    return (Math.abs(a*b) / gcd(a,b));
  }
  return range.reduce(function(a,b){
    return lcm(a,b);
  });
}
smallestCommons([1,5]);
