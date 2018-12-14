#!/usr/bin/env node
/*
In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order.

 

Example 1:

Input: "abbxxxxzzy"
Output: [[3,6]]
Explanation: "xxxx" is the single large group with starting  3 and ending positions 6.
Example 2:

Input: "abc"
Output: []
Explanation: We have "a","b" and "c" but no large group.
Example 3:

Input: "abcdddeeeeaabbbcd"
Output: [[3,5],[6,9],[12,14]]
*/
var largeGroupPositions = function(S) {
    var result = [];
    var start;
    var prev;
    var count;
    
    for (var i = 0; i < S.length; i++) {
        if (prev === S[i]) {
            count++;
        } else {
            if (count >= 3) {
                result.push([start, i - 1]);
            }
            prev = S[i];
            start = i;
            count = 1;
        } 
    }
    
    if (count >= 3) {
        result.push([start, S.length - 1]);
    }
    
    return result;
};
var String= process.argv[2];
console.log(largeGroupPositions(String));
//console.log(largeGroupPositions("abbxxxxzzy"));