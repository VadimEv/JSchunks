function sumPrimes(num) {
  var sigma = 0;
  function makePrimes(max){
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(max), output = [];
    // Make an array from 2 to (n - 1)
    for (var i = 0; i <= max; i++) {
        array.push(true);
    }
    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= max; i++) {
        if (array[i]) {
            for (var j = i * i; j <= max; j += i) {
                array[j] = false;
            }
        }
    }
    // All array[i] set to true are primes
    for (var i = 2; i <= max; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    return output;
  }
  var primes = makePrimes(num);
  for (var p = 0; p < primes.length; p++) {
    sigma += primes[p];
  }
  console.log(primes);
  return sigma;
}

sumPrimes(10);
