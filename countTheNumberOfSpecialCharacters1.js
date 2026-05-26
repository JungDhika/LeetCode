var numberOfSpecialChars = function(word) {

    let output = "";
    let result = "";

    for(let i = 0; i < word.length - 1; i++){
        
        for(let j = i+1; j < word.length; j++){

            if( (word[i] == word[j].toUpperCase() || word[j] == word[i].toUpperCase() ) && word[i] !== word[j]){
                // console.log(word[i].toLowerCase());
                output += word[i];
            }
        }
    }

    output = output.toLowerCase();

    for(let char of output){
        if(!result.includes(char)){
            result += char;
        }
    }

    return result.length;

};




console.log(numberOfSpecialChars("abBCab"));








// var numberOfSpecialChars = function(word) {

//     // new Set only filter special and remove duplicate string exp: Ayama to Ayam
//     let set = new Set(word);
//     let output = 0;

//     let lower = new Set("abcdefghijklmnopqrstuvwxyz");

//     for(let char of set){

//         if(lower.has(char)){

//             if(set.has(char.toUpperCase())){
//                 output++;
//             }

//         }

//     }

// return output;

// };




// console.log(numberOfSpecialChars("abBCab"));









