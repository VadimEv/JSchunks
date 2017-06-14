function addTogether() {
  var args = Array.from(arguments); //break down arguments into the array
  return args.some(n => typeof n !== 'number') ? undefined : // check if some of those elements is not a number
    args.length > 1 ? args.reduce((a, n) => a += n, 0): 
        (n) => typeof n === 'number' ? n + args[0]: undefined;
}
addTogether(2)(3); // works like: first calls function with value in first brackets, which returns another function, which is called with 2nd set of arguments
