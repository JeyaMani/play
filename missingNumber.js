#!/usr/bin/env node

function missingNumber(nums){
    const numberArray = nums.sort((num1, num2)=>{
      return num1 - num2;
   });
   for (var i=0; i < numberArray.length; i++){
      if(i !== numberArray[i]){
        return i;
      }
   }
 }
 console.log(missingNumber([0,3,5,8,4,6,1,9,7]))