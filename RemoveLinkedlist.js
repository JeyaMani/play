#!/usr/bin/env node

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
console.log(myRemove(6));