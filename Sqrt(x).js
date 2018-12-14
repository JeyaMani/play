#!/usr/bin/env node
/*
Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
*/
function mySqrt(x)
{
    for (var i=0; i<= x; i++) {
       if(i*i === x) {
            return i;
        }        
        if(i*i > x) {
            return i-1;
        }
    }
    return x;
}
console.log(mySqrt(4));