/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let mid = ((low + high - 1) / 2).toFixed();
        if (nums[mid] > nums[high]) {
            low = mid + 1
        } else {
            high = mid;
        }
    }
    let pivot = high;
    low = 0;
    high = nums.length - 1;
    while(low < high) {
        let mid = ((low + high - 1) / 2).toFixed();
        let pivotIndex = (mid + pivot) % nums.length;
        if (nums[pivotIndex] === target) {
            return pivotIndex;
        }
        if (nums[pivotIndex] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
};
// @lc code=end

