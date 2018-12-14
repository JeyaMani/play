#!/usr/bin/env node

var nums = [1,7, 11, 1];
var target = 12;

for (var x = 0; x < nums.length; x++) {
var complement = target - nums[x];
if (nums.indexOf(complement) != x && nums.indexOf(complement) > -1){
console.log(x + ' , ' + nums.indexOf(complement)); // Output 0,2
break;
}
}
