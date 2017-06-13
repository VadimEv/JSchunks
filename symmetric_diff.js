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
    arr3.push(arr1[i]);}
  }
 return arr3;
}

function diffArray(arr1, arr2){
  return diff(arr1,arr2).concat(diff(arr2,arr1));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
