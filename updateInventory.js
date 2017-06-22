
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var len1 = arr1.length;
    var len2 = arr2.length;
    var arr3 = [];
    for(var i = 0; i < len1; i++){
      for(var j = 0; j < len2; j++){
        if(arr1[i][1] == arr2[j][1]){
          arr3.push([arr2[j][0],arr2[j][1]]);
        } /*else {
          arr3.push([arr2[j][0],arr2[j][1]]);
        }*/

      }
    }

  return arr3;
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
