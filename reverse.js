#!/usr/bin/env node

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