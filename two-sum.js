#!/usr/bin/env node
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
var nums = [1,7, 11, 1];
var target = 12;

for (var x = 0; x < nums.length; x++) {
var complement = target - nums[x];
if (nums.indexOf(complement) != x && nums.indexOf(complement) > -1){
console.log(x + ' , ' + nums.indexOf(complement)); // Output 0,2
break;
}
}
