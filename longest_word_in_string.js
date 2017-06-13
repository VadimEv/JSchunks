function findLongestWord(str) {
  var wordArray = str.split(" ");
  var wordLength = wordArray.map(function(val){
  return val.length;});
  var sortedLenght = wordLength.sort(function(a,b){return a-b;});
  return sortedLenght.pop();
}

findLongestWord("The quick brown fox jumped over the lazy dog");
