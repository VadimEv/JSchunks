
function checkCashRegister(price, cash, cid) {
  var totalChange = 100* (cash - price); //in cents
  var totalCid = totalDrawer(cid);
  var result = [];
  var coinsLeft = totalChange;
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
    var pairs = {"PENNY":1, "NICKEL": 5, "DIME":10, "QUARTER" : 25,"ONE":100, "FIVE":500, "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED" : 10000};
    return pairs[value];
  }
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
