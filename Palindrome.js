#!/usr/bin/env node
/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

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