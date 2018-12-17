#!/usr/bin/env node
/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/
if(process.argv[2] === undefined || !process.argv[2].match(/^[0-9]+$/)) {
    console.log("Provided '" + process.argv[2] + "'");
    console.log("Error: you must provide an integer.");
    process.exit();
}
var n= process.argv[2];

function fizzbuzz(n){
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log( i + " = " + "FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log( i + " = " + "Fizz");
        }
        else if (i % 5 === 0) {
            console.log( i + " = " + "Buzz");
        }
        else {
            console.log(i);
        }
    }
}
fizzbuzz(n);
