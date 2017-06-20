function sym(args) {
  var input = Array.from(arguments);
  function diff(arr1, arr2) {
    var arr3= [];
    for(var i = 0; i < arr1.length; i++ ){
      var unique = true;
       for(var j=0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                 unique = false;
                 break;
            }
       }
    if(unique){
      arr3.push(arr1[i]);
    }
    }
     return arr3;
    }
  function diffArray(arr1, arr2){
    return diff(arr1,arr2).concat(diff(arr2,arr1));
  }
  return input.reduce(diffArray).filter(function(item, pos, self) {
    return self.indexOf(item) === pos;}).sort(function(a, b){return a - b;});
}
//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
//sym([1, 2, 3], [5, 2, 1, 4]);
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
//sym([1, 2, 3], [5, 2, 1, 4]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
