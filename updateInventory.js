
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var len1 = arr1.length;
    var len2 = arr2.length;
    var arr3 = [];
  // double-for loop to push elements we need to update.
    for(var i = 0; i < len1; i++){
      for(var j = 0; j < len2; j++){
        if(arr1[i][1] == arr2[j][1]){
          arr3.push([arr1[i][0] + arr2[j][0],arr2[j][1]]);
        }
      }
    }
return arr3.concat(diff(arr1, arr3)).concat(diff(arr2, arr3)).sort((a, b) => a[1] > b[1]);
  // next we abuse modified for 2D array difference function concatinating updated items with uncahged items from cuurent inventory and new items from new inventory and sort basing on string value
  function diff(arr1, arr2) {
    var arr3= [];
    for(var i = 0; i < arr1.length; i++ ){
      var unique = true;
       for(var j=0; j < arr2.length; j++){
            if(arr1[i][1] == arr2[j][1]){
                 unique = false;
                 break;
            }
       }
    if(unique){
      arr3.push(arr1[i]);}
    }
   return arr3;
  }
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
