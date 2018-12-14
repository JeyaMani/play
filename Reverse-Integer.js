#!/usr/bin/env node

var n_array= [];
for(var a= 2; a < process.argv.length; a++) {
    n_array[a - 2]= parseInt(process.argv[a], 10);
}

function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
//console.log(reverse_a_number(12345));

for(a= 0; a < n_array.length; a++) {
    console.log(n_array[a] + " => " + reverse_a_number(n_array[a]));
}



/*
function reverse(str)
{
    var str = str.toLowerCase();;
    return str.split("").reverse().join("");
}
console.log(reverse("Hello"));
*/