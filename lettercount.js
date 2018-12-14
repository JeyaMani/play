#!/usr/bin/env node

function letterCount(str) {
    var charMap = {}, result= {};
    for(var char of str) {
        charMap[char]= charMap[char] ? charMap[char] + 1 : 1;
        if(charMap[char] > 1) result[char]= charMap[char];
    }
    return result;
}
console.log(letterCount("Door"));