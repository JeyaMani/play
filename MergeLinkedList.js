#!/usr/bin/env node
/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

function mergeTwoSortedLists (l1, l2) {
var mergedLinkedListHead = { val : -1, next : null }; 
var runner = mergedLinkedListHead;
while(l1 && l2) {
if(l1.val > l2.val) {
runner.next = l2;
            l2 = l2.next;
        } else {
runner.next = l1;
            l1 = l1.next;
        }
        runner = runner.next;
    }

runner.next = l1 || l2;
return mergedLinkedListHead.next;
}
console.log(mergeTwoSortedLists([1->2->4, 1->3->4]));