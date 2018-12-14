#!/usr/bin/env node

function twoSum(arr, S) {

  var sums = [];
  for (var i = 0; i < arr.length; i++) { 
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === S) {
        sums.push([i, j]);
      }
    }
  }
    console.log(sums);
}

twoSum([6, 5, 2, 4, 8, 11], 10);       
