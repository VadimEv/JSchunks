function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var obj = {};
  // Only change code below this line
  var sizeC = Object.keys(collection).length;
  var sizeS = Object.keys(source).length;
  var sourceKeys = Object.keys(source);
  for(var i=0;i < sizeC; i++){
    var result = true;
    for(var j=0; j < sizeS; j++){
      if (!(collection[i].hasOwnProperty(sourceKeys[j]) && collection[i][sourceKeys[j]] === source[sourceKeys[j]])){
        result = false;
      }
    }
      if(result){
        arr.push(collection[i]);
      }
  }

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) > [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) > [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) > [{ "a": 1, "b": 2, "c": 2 }]
