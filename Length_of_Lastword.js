#!/usr/bin/env node
/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5
*/
function lengthOfLastWord(s)
{
    var words = s.trim().split(' ');
    
    return words[words.length-1].length;
}
var String= process.argv[2];
console.log(lengthOfLastWord(String));
//console.log(lengthOfLastWord("Hello World"));