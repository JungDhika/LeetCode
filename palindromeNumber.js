var isPalindrome = function(x) {
    
    let number = x.toString();
    
    if(number[0] == "-") return false;
    
    // revers only works with array so need convert to split
    let numberTwist = number.split('').reverse().join('');

    return numberTwist === number ? true : false;
    
};


console.log(isPalindrome(121));