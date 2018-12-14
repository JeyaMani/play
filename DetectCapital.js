#!/usr/bin/env node
/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
Example 1:
Input: "USA"
Output: True
Example 2:
Input: "FlaG"
Output: False
*/

function detectCapital(word)
{
    return (word.substr(1).toLowerCase() == word.substr(1) || word.toUpperCase() == word)
}
var string= process.argv[2];

console.log(detectCapital(string));

/*
function detectCapital(word)
{
    return
        word.toLowerCase() == word
        || word.toUpperCase() == word
        || word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
           == word;
}
var string= process.argv[2];

console.log(detectCapital(string));
*/
