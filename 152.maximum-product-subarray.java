/*
 * @lc app=leetcode id=152 lang=java
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
class Solution {
    public int maxProduct(int[] nums) {
        if (nums.length == 0) return 0;
        int max = nums[0];
        int min = nums[0];
        int res = nums[0];

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] >= 0) {
                max = Math.max(max * nums[i], nums[i]);
                min = Math.min(min * nums[i], nums[i]);
            } else if (nums[i] < 0) {
                int temp = min;
                min = Math.min(max * nums[i], nums[i]);
                max = Math.max(temp * nums[i], nums[i]);
            }
            res = Math.max(max, res);
        }

        return res;
    }
}
// @lc code=end

