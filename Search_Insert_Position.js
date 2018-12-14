#!/usr/bin/env node
/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/
function search_Insert(arr, target)
{
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= target) {
            return i
        }
    }
    return arr.length;
}
//var target= process.argv[2];
//var arr= process.argv.slice[3];
//console.log(search_Insert(target, arr));
console.log(search_Insert([1,3,5,6], 7));