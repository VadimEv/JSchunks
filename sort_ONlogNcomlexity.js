const performance = window.performance
// Number of elements in array
const N = 10000;
const randomArray = []
for(let i = 0; i<N; i++) {randomArray.push(Math.floor(100*N*Math.random()))}

const mergeSort = (array) => {
        //combine function
        let combine = (arr, start, mid, end) => {
	   let buff = new Array(end + 1);
	   let k = start;
	   while ( k <= end) {
		buff[k] = arr[k];
                k++;
		}
           let i = start;
           let j = mid + 1;
           k = start;
	   while (i <= mid && j <= end){
		
		if(buff[i] <= buff[j]){
		   arr[k] = buff[i];
		   i++;
		}  else {
		   arr[k] = buff[j];
                   j++;
                }
                k++;
	   };
           while ( i <= mid){
		arr[k] = buff[i];
		i++;
		k++;
		}
	   while ( j <= end){
		arr[k] = buff[j];
		j++;
		k++;
		}
	   buff = [];
	}
	//helper function
	let mrgSort = (arr, start, end) => {
	   if (start >= end) {
		return arr
		}
	   let  mid = Math.floor((start + end)/2);
	   mrgSort(arr, start, mid);
           mrgSort(arr, mid + 1, end);
           combine(arr, start, mid, end);
           return arr;
	}

	const n = array.length;
	mrgSort(array, 0, n - 1);
	return array;
}

const quickSort = (array) => {
      	let swap = (arr, i, j) => {
	   let tmp = arr[i];
	       arr[i] = arr[j];
               arr[j] = tmp;
           return arr;
	}

	let partition = (arr, low, high) => {
		let pivot = arr[high];
		let i = low - 1;
		for (let j = low; j < high; j++){
			if (arr[j] < pivot){
				i++;
				swap(arr, i, j)
			}
		}
	swap(arr, i + 1, high);
	return i+1;			
	}
	
	let qSort = (arr, low, high) => {
		if (low < high) {
			let pivot = partition(arr, low, high);
			qSort(arr, low, pivot - 1);
			qSort(arr, pivot + 1, high);
			return arr;
		}
	}
	
	const n = array.length;
	qSort(array, 0, n - 1);
	
	return array;
}

var t1 = performance.now()
//sorting goes here
let sortedArray = quickSort(randomArray);

var t2 = performance.now()
console.log('Sorting took ' + (t2 - t1) + ' milliseconds.')
console.log(sortedArray);
