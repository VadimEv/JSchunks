//Array population and sort timing
const performance = window.performance
// Number of elements in array
const N = 10000;
const randomArray = []
for(let i = 0; i<N; i++) {randomArray.push(Math.floor(100*N*Math.random()))}

const bubbleSort = (array) => {
  var changed = true

  while (changed) {
    changed = false
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        // swap those numbers
        var temp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = temp
        changed = true
      }
    }
  }
  return array
}

const simpleSort = (array) => {
  const n = array.length;
  for (let i = 0; i < n; i++) {
  	for (let j = i + 1; j < n; j++){
	  if (array[j] < array[i]){
		let tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;
	  }
	}
  }
  return array
}

const selectionSort = (array) => {
	let swap = (arr, i, j) => {
	   let tmp = arr[i];
	       arr[i] = arr[j];
               arr[j] = tmp;
           return arr;
	}

	let locOfSmallest = (arr, start, end) => {
	   let i = start;
	   let j = i;
           while ( i <= end ){
		if(arr[i] < arr[j]){  
			j = i
		};
		i++;
	   } 	
	   return j;  
	}

	const n = array.length
        let i = 0;
	while ( i < n - 1 ){
		let j = locOfSmallest(array, i, n - 1);
		swap(array, i, j);
		i++;
	}
	return array;
}

const insertionSort = (array) => {
	const n = array.length
	var i = 1;
	let insertIth = (arr, n, i) => {
		let key = arr[i];
		let j = i - 1;
		while ( j >= 0 && arr[j] > key){
			arr[j+1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
		
		return arr;
	}
	while (i < n){
		insertIth(array, n, i);
		i++;
	}
	
	return array;
}

var t1 = performance.now()
//sorting goes here

let sortedArray = insertionSort(randomArray);

var t2 = performance.now()
console.log('Sorting took ' + (t2 - t1) + ' milliseconds.')
console.log(sortedArray);
