var isPalindrome = function(x) {
    
    let number = x.toString();
    
    if(number[0] == "-") return false;
    
    //reverse only works with arrays, so you need to convert it using split.
    let numberTwist = number.split('').reverse().join('');

    return numberTwist === number ? true : false;
    
};


console.log(isPalindrome(121));