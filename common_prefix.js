#!/usr/bin/env node
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
function longest_common_prefix(strs)
{
    if (strs.length <= 0) 
        return '';
    return strs.reduce(function (prev, next) {
        var i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
}
var strings= process.argv.slice(2);
console.log(strings);
console.log(longest_common_prefix(strings));
