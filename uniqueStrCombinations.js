function permAlone(str) {
  // function to make combinations of array
  var myRegex = /(.)\1/;
  return heap(str).filter(function(curr){
    return !myRegex.test(curr);
  }).length;
  function heap(str){
    var arr = str.split(''),
        permutations = [];
    function swap(a,b){
      var temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }
    function generator(n){
      if (n ===1){
        permutations.push(arr.join(''));
      } else {
        for (var i =0; i !=n; i++) {
          generator(n-1);
          swap(n % 2 ? 0:i, n-1);
        }
      }
    }
    generator(arr.length);
    return permutations;
  }
}
permAlone('aab');
