#!/usr/bin/env node
/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
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
