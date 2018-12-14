#!/usr/bin/env node
/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/
function mergeArray(nums1, m, nums2, n)
{
    let arr = nums1.slice(0, m);
    let i = 0,
        j = 0,
        k = 0;
    while(i < m && j < n) {
        arr[i] <= nums2[j] ? nums1[k++] = arr[i++] : nums1[k++] = nums2[j++];
    }
    while(i < m) {
        nums1[k++] = arr[i++];
    }
    while(j < n) {
        nums1[k++] = nums2[j++];
    }
}
console.log(mergeArray([1,2,3,0,0,0], [2,5,6]));