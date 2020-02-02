function frankenSplice(arr1, arr2, n) {
//use spread oeprator to insert array as elements not entire array as single element
  let myArr = arr2; 
  let removed = arr2.splice(n,0, ...arr1); 
  return myArr; 
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
