#!/usr/bin/env node

/* Given an array nums, write a function to move all 0's to the end of
 * it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

function moveZero(data) {
    var b = [];
    var c = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i] !== 0) {
            b.push(data[i]);
        } else {
            c.push(0)
        }
    }
    if (c.length > 0) {
        b = b.concat(c);
    }
    return b;
}

var a= process.argv[2].split('').map(a => parseInt(a, 10));
console.log(moveZero(a));
