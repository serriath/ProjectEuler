function fiboEvenSum(n) {
    
    var result = 0;
    var previousNumber = 0;
    var currentNumber = 0;

    for(var i = 1; i <= n; i++){

        if(i == 1){
            currentNumber = 1;
        }
        else {
            var temp = currentNumber;
            currentNumber += previousNumber;
            previousNumber = temp;
        }

        if((previousNumber + currentNumber) % 2 == 0){
            result += (previousNumber + currentNumber);
        }
        
    }

    console.log(result);

    return result;
}
  
fiboEvenSum(10);
