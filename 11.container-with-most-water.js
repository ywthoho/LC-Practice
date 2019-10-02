/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let res = 0
    while (i < j) {
        let temp = (j - i) * (height[i] > height[j] ? height[j] : height[i])
        res = res < temp ? temp : res;
        if (height[i] < height[j]) {
            i++
        } else if (height[j] <= height[i]) {
            j--
        }
    }
    return res;
};
// @lc code=end

