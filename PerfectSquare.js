#!/usr/bin/env node
/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false
*/
if(process.argv[2] === undefined || !process.argv[2].match(/^[0-9]+$/)) {
    console.log("Provided '" + process.argv[2] + "'");
    console.log("Error: you must provide an integer.");
    process.exit();
}
var n= process.argv[2];

function isPerfectSquare(num) {
    var square_root= Math.sqrt(num);
    return square_root == Math.floor(square_root);
}

console.log(
    isPerfectSquare(n)
        ? "Perfect square"
        : "Not a perfect square");
