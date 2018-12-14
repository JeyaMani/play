#!/usr/bin/env node

const isValid = function(s){
  const chars = s.split(""), map = {"{":"}", "(":")","[":"]"}, stack = []
  for(let c of chars){
    if(map[c]) stack.push(map[c])
    else if(c != stack.pop()) return false
  }
  return stack.length === 0
}