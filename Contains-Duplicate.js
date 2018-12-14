#!/usr/bin/env node

//function containsDuplicate(arr) {
var arr = [1,2,3,4,5,2,1];
var sorted_arr = arr.slice().sort(); 
var results = [];
for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}
//}
console.log(results);


/*
var arr = [1, 1, 4, 5, 5], dup = [], duplicates = [];

for(var i = 0; i < arr.length; i++){
  if(dup.includes(arr[i]) && !duplicates.includes(arr[i]))
    duplicates.push(arr[i])
  else
    dup.push(arr[i]);
}

console.log(duplicates);
*/