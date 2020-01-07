function largestPrimeFactor(number) {

    var sqrtNum = Math.sqrt(number);

    var primes = [2,3,5,7]

    if (primes.indexOf(number) !== -1){
        console.log(number);
        console.log("_____________________________________________");
        return number;
    }

    console.log("sqrtNum = " +sqrtNum);

    for(var i = 0; i < sqrtNum+1; i++) {
        console.log(i);
        for(var j = 0; j < i; j++){
            if (i%j === 0){
                console.log(j);
            }
        }

    }

}



largestPrimeFactor(2);
largestPrimeFactor(3);
largestPrimeFactor(5);
largestPrimeFactor(7);
largestPrimeFactor(13195);
//largestPrimeFactor(600851475143);
