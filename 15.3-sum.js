/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);
    const res = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length;
        while(j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
              let last = res[res.length - 1] || [];
              if (last[0] !== nums[i] || last[1] !== nums[j] || last[2] !== nums[k]) {
                res.push([nums[i], nums[j], nums[k]]);
              }
                if (nums[j++] === nums[j]) j++;
                if (nums[k--] === nums[k]) k--;
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                if (nums[j++] === nums[j]) j++;
            } else {
                if (nums[k--] === nums[k]) k--;
            }
        }
    }
    return res;
};
// @lc code=end

