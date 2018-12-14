#!/usr/bin/env node

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
