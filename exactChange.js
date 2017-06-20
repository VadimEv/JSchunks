
function checkCashRegister(price, cash, cid) {
  var totalChange = 100* (cash - price); //in cents
  var totalCid = totalDrawer(cid);
  var result = [];
  //console.log(totalCid);
  var coinsLeft = totalChange;
  // Here is your change, ma'am.
  if (totalChange > totalCid){
    return "Insufficient Funds";
  }
  if (totalChange == totalCid){
    return "Closed";
  }
  for (var j = cid.length - 1; j >= 0; j--){
    var currentCoinName = cid[j][0],
        currentCoinTotal = cid[j][1] * 100,
        currentCoinValue = getVal(currentCoinName),
        currentCoinAmount = currentCoinTotal / currentCoinValue,
        toReturn = 0;
    while (coinsLeft >= currentCoinValue && currentCoinAmount > 0){
      coinsLeft -= currentCoinValue;
      currentCoinAmount--;
      toReturn++;
      console.log(coinsLeft);
    }
    //console.log(toReturn);
    if (toReturn > 0){
      result.push([currentCoinName , toReturn * (currentCoinValue / 100)]);
    }
  }
  if (totalDrawer(result) != totalChange){
    return "Insufficient Funds";
  }
  return result;


  function totalDrawer(cid){
    var total = 0;
    for (var i=0; i < cid.length; i++){
      total += cid[i][1]*100;
    }
    return total;
  }
  function getVal(value){
    switch (value) {
      case "PENNY":
        return 1;
      case "PENNY":
        return 5;
      case "DIME":
        return 10;
      case "QUARTER":
        return 25;
      case "ONE":
        return 100;
      case "FIVE":
        return 500;
      case "TEN":
        return 1000;
      case "TWENTY":
        return 2000;
      case "ONE HUNDRED":
        return 10000;
    }
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
