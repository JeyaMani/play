#!/usr/bin/env node
/*
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

 

Example:

Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
*/
/*
function most_common_word(paragraph, banned)
{
    let arr = paragraph.toLowerCase().split(" ");
    let hashTable = {};
    let max = 0;
    let res = '';
    for (let i = 0; i < arr.length; i++){
        let word = arr[i];
        if (banned.indexOf(word) === -1 && word !== ''){
            if (hashTable[word] === undefined){
                hashTable[word] = 1;
            } else {
                hashTable[word]++;
            }
        }
    }
    for (let key in hashTable){
        if (hashTable[key] > max){
            max = hashTable[key];
            res = key;
        }
    }
    return res;
}
console.log(most_common_word(paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]));

*/
function most_common_word(paragraph, banned)
{
let words = paragraph.toLowerCase().replace(/[\W_]+/g," ").split(" ");
    let hash = {};
    let max = 0;
    let mode = '';
    let bannedSet = {};
    banned.forEach((word) => {
        bannedSet[word] = true;
    });

    words.forEach((word) => {
        hash[word] = hash[word] ? hash[word] + 1 : 1;
        if (word !== "" && !bannedSet[word] && hash[word] >= max) {
           max = hash[word];
           mode = word;
        }
    });
    
    return mode;
}
console.log(most_common_word(paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]));