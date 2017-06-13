
function destroyer(arr) {
  // Remove all the values
  var newArr = arguments[0];
  var args = Array.prototype.slice.call(arguments);
  var toRemove = args.slice(1);

  function filterer (value) {
    return toRemove.indexOf(value) === -1;
  }
  return newArr.filter(filterer);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
