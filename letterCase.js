#!/usr/bin/env node
/*
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
*/

function letterCase(str){
    var results = [];
    var arr = str.split("");
    var len = Math.pow(str.length, 2);

    for( var i = 0; i < len; i++ ){
      for( var k= 0, j = i; k < arr.length; k++, j >>=1){
        arr[k] = ( j & 1 ) ? arr[k].toUpperCase() : arr[k].toLowerCase();
      }
      var combo = arr.join("");
      results.push(combo);
    }
    return results;
  }

  console.log(letterCase("a1b2"));