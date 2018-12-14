#!/usr/bin/env node
/*
You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
*/

function checkRecord(s)
{
    var countA = 0;
    var flag =false;
    for(var i=0;i<s.length;i++) {
        if(s[i] == "A" && countA) return false;
        if(s[i] == "A") countA++;
        if(i <= s.length - 3
            && s[i] == "L" 
            && s[i] == s[i+1] 
            && s[i+1] == s[i+2]
        )
            return false;
    }
    return true;
}
var string= process.argv[2];

console.log(checkRecord(string));