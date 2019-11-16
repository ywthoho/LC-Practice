/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let diff = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const currentSum = nums[i] + nums[j] + nums[k];
            if (currentSum == target) return target;

            else if (currentSum < target) {
                if (target - currentSum < Math.abs(diff)) {
                    diff = target - currentSum;
                    
                }
                j ++;
            } else {
                if (currentSum - target < Math.abs(diff)) {
                    diff = target - currentSum;
                }
                k --
            }
        }
    }
    return target - diff;

};
// @lc code=end

