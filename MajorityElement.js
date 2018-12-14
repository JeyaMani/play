#!/usr/bin/env node

var majorityElement = function(nums) {
    var counts = {}, majority = {count:0, number:0};
    for (var x=0; x< nums.length; x++){
        counts[nums[x]] = counts[nums[x]] + 1 || 1;
    }
    for(var prop in counts ){
        if (counts.hasOwnProperty(prop) && counts[prop] > majority.count){
            majority = { number : prop, count : counts[prop]}
        }
    }
    
    return parseInt(majority.number);
};
console.log(majorityElement(1,2,3,2,2,2,1,5));