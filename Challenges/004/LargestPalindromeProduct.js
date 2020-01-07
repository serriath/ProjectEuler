function largestPalindromeProduct(n) {

    var number = "9";

    //generate the largest number possible with the number of digits provided
    for(var i = 1; i < n; i++){
        number += "9";
    }

    //loop though the number backwards
    for(var i = number; i > 0; i--){
       
        for(var j = number; j > 0; j--){

            var num = (i * j);
            var result =  num.toString().substr(0,(num.length/2));

        }
    }


    return true;
}

largestPalindromeProduct(3);
// largestPalindromeProduct(4);
// largestPalindromeProduct(5);
