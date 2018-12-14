#!/usr/bin/env node

if(process.argv[2] === undefined || !process.argv[2].match(/^[0-9]+$/)) {
    console.log("Provided '" + process.argv[2] + "'");
    console.log("Error: you must provide an integer.");
    process.exit();
}
var n= process.argv[2];

function isPerfectSquare(num) {
    var square_root= Math.sqrt(num);
    return square_root == Math.floor(square_root);
}

console.log(
    isPerfectSquare(n)
        ? "Perfect square"
        : "Not a perfect square");
