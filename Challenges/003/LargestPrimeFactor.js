function largestPrimeFactor(number) {

    var sqrtNum = Math.sqrt(number);

    var primes = [2,3,5,7]

    if (primes.indexOf(number) !== -1){
        return number;
    }

    var largestPrime = 0;

    for(var i = 8; i < sqrtNum + 1; i++) {

        var isPrime = true;

        for(var j = 0; j < primes.length; j++) {

            if(i % primes[j] === 0){

                isPrime = false;
                break;
            }
        }

        if(isPrime){
            primes.push(i);
            if(number % i === 0){
                largestPrime = i;
            }
        }
    }

    return largestPrime;
}


//console.log(largestPrimeFactor(2));
//console.log(largestPrimeFactor(3));
//console.log(largestPrimeFactor(5));
//console.log(largestPrimeFactor(7));
//console.log(largestPrimeFactor(13195));
//console.log(largestPrimeFactor(600851475143));




function largestPrimeFactor(number) {

    if (number == 2) {
      return number;
    }
  
    var workingNumber = number;
  
    // We now loop through all odd numbers.
    // sqrt our workingNumber because the prime can't be higher than that.
    for (var i = 3; i <= Math.sqrt(workingNumber); i = i + 2) { 
      while (workingNumber % i == 0) {
          
        workingNumber = workingNumber / i; 
      }
    } 
  
    return workingNumber;
  }
  
  
console.log(largestPrimeFactor(2));
console.log(largestPrimeFactor(3));
console.log(largestPrimeFactor(5));
console.log(largestPrimeFactor(7));
console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));