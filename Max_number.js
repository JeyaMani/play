#!/usr/bin/env node
/*Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/
var thirdMax = function(nums) {
        var count = 0;
        for (var i in nums) {
            if (count > 0 && nums[i] == max || count > 1 && nums[i] == mid) continue;
            count++;
            if (nums[i] > max) {
                small = mid;
                mid = max;
                max = nums[i];
            } else if (nums[i] > mid) {
                small = mid;
                mid = nums[i];
            } else if (nums[i] > small) {
                small = nums[i];
            }
        }
        return count < 3 ? max : small;
}
console.log(thirdMax(3,2,1));


