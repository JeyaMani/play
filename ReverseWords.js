#!/usr/bin/env node

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