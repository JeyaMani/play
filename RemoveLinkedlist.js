#!/usr/bin/env node
/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
*/

function myRemove(l, k){
    if(l == null){
        return l;
    }
    while(l.value == k){
        l = l.next;
    }
    thisNode = l;
    nextNode = thisNode.next;
    while(nextNode != null){
        if(nextNode.value == k){
            thisNode.next = nextNode.next;
            // No more nodes, ie last node was to be removed
            if(thisNode.next == null)
                break;
        }
        thisNode = thisNode.next;
        nextNode = thisNode.next;       
    }
    return l;
}
console.log(myRemove((1->2->6->3->4->5->6), 6));