#!/usr/bin/env node
/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function(nums) {
    var counts = {}, majority = {count:0, number:0};
    for (var x=0; x< nums.length; x++){
        counts[nums[x]] = counts[nums[x]] + 1 || 1;
    }
    for(var prop in counts ){
        if (counts.hasOwnProperty(prop) && counts[prop] > majority.count){
            majority = { number : prop, count : counts[prop]}
        }
    }
    
    return parseInt(majority.number);
};
console.log(majorityElement(3,2,3));