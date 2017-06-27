/*Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices.
Once an element has been used, it cannot be reused to pair with another.*/
function pairwise(arr, arg) {
  var indexArr = [];
  var len = arr.length;
  for (var i = 0; i < len; i++) {
      for (var j = i + 1; j < len; j++) {
          if ((arr[i]+arr[j]) == arg){   // this line checks if sum of elements equals arg
            indexArr.push(i+j); // and pushes sum of indexes into the indexArr
            delete arr[i]; //also we delete the respective elements, since we don't want to use them
            delete arr[j]; // delete(instead of splice) is used since it don't change the array length, just makes the lement empty.
          }
      }
  }
  console.log(indexArr);
  var sum = indexArr.reduce((a, b) => a+b, 0);
  return sum;
}

pairwise([1, 1, 1], 2);
