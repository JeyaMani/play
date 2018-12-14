#!/usr/bin/env node

var n_array= [];
for(var a= 2; a < process.argv.length; a++) {
    n_array[a - 2]= parseInt(process.argv[a], 10);
}

function isPow3(n)
{
    if (n == 0) return false;
    while (n % 9 == 0)
    {
        n /= 9;
    }
    return (n == 1 || n == 3);
}

for(a= 0; a < n_array.length; a++) {
    console.log(n_array[a] + " => " + isPow3(n_array[a]));
}