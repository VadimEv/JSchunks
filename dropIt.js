function dropElements(arr, func) {
  var aLen =  arr.length;
  // Drop them elements.
 for(var i=0; i < aLen; i++){
    if (func(arr[0]) === true){
     break;
     } else { arr.shift();}
   }
   return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
