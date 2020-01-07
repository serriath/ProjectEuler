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



// largestPrimeFactor(2);
// largestPrimeFactor(3);
// largestPrimeFactor(5);
// largestPrimeFactor(7);
//largestPrimeFactor(13195);
largestPrimeFactor(600851475143);
