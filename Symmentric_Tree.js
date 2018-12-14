#!/usr/bin/env node
/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
*/
var isSymmetric = function(root) {
    if(!root) return true;
    function mirror(a, b){
        if(!a && !b) return true;
        if(!a || !b || a.val !== b.val) return false;
        return mirror(a.left, b.right) && mirror(a.right, b.left);
    }
    return mirror(root.left, root.right);
}
var root= process.argv[2];
console.log(isSymmetric(root));