#!/usr/bin/env node
/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/
function isSameTree(p, q)
{
    if(!p && !q) return true;
    if((!p && q) || (!q && p) || (p.val !== q.val)) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
var p= process.argv.slice[2];
var q= process.argv.slice[3];
console.log(isSameTree(p, q));