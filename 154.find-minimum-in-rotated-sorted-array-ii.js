/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        // min in seconde half
        if (nums[m] > nums[r]) {
            l = m + 1;
        } else if (nums[m] < nums[r] ){
            r = m;
        } else {
            r --
        }
    }
    return nums[l];
};
// @lc code=end

