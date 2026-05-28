/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let result = "";

    if(strs.length == 0) return "";
    if (strs[0] === "") return "";


    for(let i = 0; i < strs[0].length; i++){

        let start = strs[0][i];
        let valid = true;

        for(let j = 1; j < strs.length; j++){

            if(start !== strs[j][i]){
                valid = false;
                break;
            }


        }

        if(valid){
            result += start;
        }else{
            break;
        }

    }

    return result;


};

console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));