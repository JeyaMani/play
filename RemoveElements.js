#!/usr/bin/env node
/*
Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
*/

function cull_array(nums, val) {
    var i= 0;
    var length= nums.length;
    while(i < length) {
        if(nums[i] == val) {
            for(j= i; j < length - 1; j++)
                nums[j]= nums[j + 1]
            length--;
        }
        else
            i++;
    }
    return length;
}

console.log(cull_array([3, 2, 2, 3], 3));