
function truthCheck(collection, pre) {
  // Is everyone being true?
   // Only change code below this line
  var sizeC = Object.keys(collection).length;
  var counter = 0;
  for(var c in collection){
    if (Boolean(collection[c][pre]) && collection[c].hasOwnProperty(pre)) {
        counter++;
    }
  }
  return counter == sizeC; 
  // Only change code above this line
}

//truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
//truthCheck([{"single": "yes"}], "single");
//truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
truthCheck([{"single": "double"}, {"single": undefined}], "single");
//optional one-liner
//function truthCheck(collection, pre) {return collection.every(obj => obj[pre]);}
