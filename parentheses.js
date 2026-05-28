/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {

    // siapkan array
    let stack = [];

    // buat objek sebagai pattern
    let map = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }


    // loop s menjadi char
    for(let char of s){
        
        // cek apakah char sesuai dengan key di map?
        if(map[char]){

            // push ke array
            stack.push(char);

        }else{

            // cek apakah ) ] } 
            if(!stack.length) return false;

            // jika map dari stack terakhir !== char
            if(map[stack.pop()] !== char){
                return false;
            }

        }

    }

    // kembalikan panjang array
    return stack.length == 0;
    
};

console.log(isValid("]([]){}"));