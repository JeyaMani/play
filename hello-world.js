#!/usr/bin/env node

var array= [1, 2, 3, 4, 5];
var sum= 0;
for(a= 0; a < array.length; a++) {
    sum+= array[a];
}
process.stdout.write("Sum: " + sum + "\n");

