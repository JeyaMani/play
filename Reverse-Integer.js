#!/usr/bin/env node
/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
*/

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