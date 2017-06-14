function steamrollArray(arr) {
  // I'm a steamroller, baby ES6
  const flatten = arr => arr.reduce(
    (acc, val) => acc.concat(
    Array.isArray(val) ? flatten(val) : val
    ),
  []
);
  return flatten(arr);
}

steamrollArray([1, [2], [3, [[4]]]]);
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"];
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4];
// steamrollArray([1, {}, [3, [[4]]]])

/**
  * Side Note: Explanation of recursion:
  * 1. flatten[] --> []
  * 2. flatten[0] --> [] + 0 --> [0]
  * 3. flatten[0,1] --> [] + 0 --> [0] + 1 --> [0,1]
  * 4. flatten[0,[1]] --> [] + 0 --> [0] + flatten[1] --> [0] + ([]+1) --> [0] + ([1]) --> [0,1]
  */
