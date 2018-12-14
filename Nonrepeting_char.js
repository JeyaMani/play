#!/usr/bin/env node
/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*/
function firstNonRepeatedCharacter(string) {
    hash= {};
    for (var i = 0; i < string.length; i++) {
        var c= string.charAt(i);
        if(c in hash)
            hash[c]++
        else 
            hash[c]= 1
    } 
    console.log(hash);
    for (var i= 0; i < string.length; i++) {
        var c= string.charAt(i);
        if(hash[c] == 1) return i;
    }
    return -1
}
var string= process.argv[2];
console.log(firstNonRepeatedCharacter(string));