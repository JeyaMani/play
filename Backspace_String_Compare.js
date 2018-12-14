#!/usr/bin/env node
/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
*/
function backspaceCompare(S, T) {
return reformatString(S) === reformatString(T)

function reformatString(s) {
	var res = []
	var str = s.split('')
	for (var i = 0; i < str.length; i++) {
		if(str[i] != '#') {
			res.push(str[i])
		}
		else if(str[i] == '#') {
			res.pop()
		}
	}
	return res.join('')
}
}
var S= process.argv[2];
var T= process.argv[3];
console.log(backspaceCompare(S, T));