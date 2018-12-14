#!/usr/bin/env node

var n_array= [];
for(var a= 2; a < process.argv.length; a++) {
    n_array[a - 2]= parseInt(process.argv[a], 10);
}

function Palindrome(str)
{
    var str = str.toLowerCase();
    var str2 = str.split("").reverse().join("");
    return str2 === str;
}

for(a= 0; a < n_array.length; a++) {
    console.log(n_array[a] + " => " + Palindrome(n_array[a]));
}