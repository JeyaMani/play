#!/usr/bin/env node
/*
Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"
Example 2:

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"
*/

if(process.argv[2] === undefined) {
    console.log("Error: you must provide a string.");
    process.exit();
}
var s= process.argv[2];

function ReverseWords(str){
        var splitString = str.split("").reverse().join("");
    return splitString;
}
console.log(ReverseWords(s));