#!/usr/bin/env node
/*
Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"
Example 2:

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"
*/

function reverse(str)
{
    var str = str.toLowerCase();;
    return str.split("").reverse().join("");
}
console.log(reverse("Hello"));

/* Palindrome
function reverse(str)
{
    var str = str.toLowerCase();;
    var str2 = str.split("").reverse().join("");
    return str2 === str;
}
console.log(reverse("madam"));
*/