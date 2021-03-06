#!/usr/bin/env node
/*
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
*/
function Perfect_number(num)
{
    var sum = 1;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) sum += i + num / i;
    }
    return num > 1 && sum === num;
}
var num= process.argv[2];

console.log(Perfect_number(parseInt(num)));