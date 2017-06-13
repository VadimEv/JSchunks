
function uniteUnique(arr) {
  var newArr = [].concat.apply([],arguments).filter(function(item, pos, self) {
    return self.indexOf(item) === pos;
  });
  return newArr;
}

uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) 
