#!/usr/bin/env node

var findComplement = function(num) {
  const bits = num.toString(2)
  const mask = parseInt("1".repeat(bits.length), 2)
  return num ^ mask
}
console.log(findComplement(15));
