#!/usr/bin/env node
/*
Given a non-negative integer num, repeatedly add all its digits until
the result has only one digit.

Example:
Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.

*/

function addDigits(num) {
    if(num < 10) return num;
    var reducer= (a, b) => a + parseInt(b);
    return addDigits(num.toString().split("").reduce(reducer, 0));
}

console.log(addDigits(38));
