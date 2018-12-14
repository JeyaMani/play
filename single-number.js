#!/usr/bin/env node
/*
var singleNumber = function(nums) {
    return nums.reduce((a,b) => a^b);
    console.log(nums);
};
*/
/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
*/
function singleNumber(num) {
    for(var i = 0; i < num.length-1; i += 2) {
        if(num[i] != num[i+1]) {
            return num[num.length-1];
        }
    }
    return num;
}
var num= process.argv[2];

console.log(singleNumber(num));