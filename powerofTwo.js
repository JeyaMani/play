#!/usr/bin/env node

var n_array= [];
for(var a= 2; a < process.argv.length; a++) {
    n_array[a - 2]= parseInt(process.argv[a], 10);
}

function powerofTwo(n) {
 if (typeof n !== 'number') 
      return 'Not a number'; 

    return n && (n & (n - 1)) === 0;
}

for(a= 0; a < n_array.length; a++) {
    console.log(n_array[a] + " => " + powerofTwo(n_array[a]));
}
//console.log(powerofTwo(16));

