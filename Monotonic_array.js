#!/usr/bin/env node
/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

Example 1:

Input: [1,2,2,3]
Output: true
Example 2:

Input: [6,5,4,4]
Output: true
Example 3:

Input: [1,3,2]
Output: false
*/
function isMonotonic(A)
{
    var inc = 1, dec = 1;
    for(var i=1; i<A.length; i++){
        inc &= (A[i] - A[i-1] >= 0);
        dec &= (A[i] - A[i-1] <= 0);
        }
    return ((inc || dec) === 0? false: true);
    //return numbers.slice().sort().toString() == numbers.toString();

}
var numbers= process.argv.slice(2);
console.log(isMonotonic(numbers));
