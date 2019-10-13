/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(l < r) {
        let m = (l + r) / 2
        if (nums[m] == target) return true;
        while(l < r && nums[l] == nums[r]) l ++;

        // first half ordered
        if (nums[l] <= nums[m]) {
            if (nums[l] <= target && target < nums[m]) {
                r = m - 1;
            } else {
                l = m + 1
            }
        } else {  // second half ordered
            if (nums[m] < target <= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1
            }
        }
    }
    return false;
};
// @lc code=end

