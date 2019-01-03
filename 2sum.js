#!/usr/bin/env node
/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

function twoSum(arr, S) {

  var sums = [];
  for (var i = 0; i < arr.length; i++) { 
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === S) {
        sums.push([i, j]);
      }
    }
  }
    console.log(sums);
}

twoSum([6, 5, 2, 4, 8, 11], 10);       
