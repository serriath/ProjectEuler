function fiboEvenSum(n) {
    
    var result = 0;
    var previousNumber = 0;
    var currentNumber = 1;

    for(var i = 1; i <= n; i++){
       
        var temp = currentNumber;
        currentNumber += previousNumber;
        previousNumber = temp;

        if((currentNumber) % 2 == 0){
            result += (currentNumber);
        }
    }

    return result;
}
  
fiboEvenSum(10);
