#!/usr/bin/env node
/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

 

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]
*/
function uncommonFromSentences(A, B)
{
    var counts = {};
    A.split(' ').concat(B.split(' ')).forEach(
        word => counts[word]= word in counts ? counts[word] + 1 : 1)    
    return Object.keys(counts).filter(word => counts[word] == 1);
}
var A= process.argv[2];
var B= process.argv[3];
console.log(uncommonFromSentences(A, B));