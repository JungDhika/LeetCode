



var romanToInt = function(roman) {
    
    let symbol = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
}

    let next;
    let current;
    let result = 0;
    let valid = true;
    
    for(let i = 0; i < roman.length; i++){
        if(!roman[i] in symbol){
            valid = false;
        }
    }
    
    if(valid){
        
        
        
        for(let j = 0; j < roman.length; j++){
            
            current = symbol[roman[j]];
            next = symbol[roman[j+1]];

            
            if(current < next){
                result -= current;
            }else{
                result += current;
            }
        }
    }
    
    return result;
    
}


console.log(romanToInt("VII"));

