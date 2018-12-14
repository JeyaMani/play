#!/usr/bin/env node
/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.
Example 2:

Input: "aba"
Output: False
*/

function repeatedSubstringPattern(str) {
    for(var i = Math.floor(str.length / 2); i>=1; i--){
        if(str.length % i === 0){
            var j=i;
            var sub=str.substring(0,j);
            while(str.indexOf(sub,j)==j)j+=i;
            if(j==str.length)return true;
        }
    }
    return false;
}
var string= process.argv[2];

console.log(repeatedSubstringPattern(string));