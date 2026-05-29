/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    
                                                    
    if(nums.length === 0) return 0;                 //return jika array kosong


    let output = [];                                //set wadah


    for(let i = 0; i < nums.length; i++){           // loop panjang array


        let number = nums[i].toString();            // ubah nums ke string dan siapkan result tiap batch
        let result = 0;

        for(let j = 0; j < number.length; j++){     // loop dengan hasil string 

            result += parseInt(number[j]);          // jumlahkan sekaligus parse ke int
            
            
        }

        output.push(result);                        // push ke array





    }

    
    let min = output[0];                            // cari min number
    
    for(let k = 0; k < output.length; k++){
        if(min > output[k]){
            min = output[k];
        }

    }


    return min;


};

console.log(minElement([19, 12, 0, 10]));


