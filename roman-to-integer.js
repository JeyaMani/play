#!/usr/bin/env node

var n_array= [];
for(var a= 2; a < process.argv.length; a++) {
    n_array[a - 2]= parseInt(process.argv[a], 10);
}

function convertToRoman(num) {
    var roman = "";

    var lookupObj = {
       1000:"M",
       500:"D",
       100:"C",
       50:"L",
       10:"X",
       5:"V",
       1:"I",
    };

    var arrayLen = Object.keys(lookupObj).length;

        while(num>0){

            for (i=arrayLen-1 ; i>=0 ; i--){

                if(num >= Object.keys(lookupObj)[i]){

                    roman = roman + lookupObj[Object.keys(lookupObj)[i]];        
                    num = num - Object.keys(lookupObj)[i];
                    break;
                }
            }
        }    
        console.log(roman);
}
//convertToRoman(1231);

for(a= 0; a < n_array.length; a++) {
    console.log(n_array[a] + " => " + convertToRoman(n_array[a]));
}


