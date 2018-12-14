#!/usr/bin/env node
/*
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
*/
function minMoves(nums) {
    var min = nums[0];
    var sum = min;
    var len = nums.length;
    for(var i = 1; i < len; i++){
        sum += nums[i];
        min = nums[i] < min? nums[i]: min;
    }
    return sum - len * min;
}
console.log(minMoves(1,2,3));