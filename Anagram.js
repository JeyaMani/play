#!/usr/bin/env node
/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/
function anagram(s, t) 
{
      return s.split("").sort().join("") === t.split("").sort().join("");

}
console.log(anagram("rat", "car"));
