/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        let temp = numbers[i] + numbers[j] - target;
        if (temp === 0) {
            return [i + 1, j + 1];
        } else if (temp < 0) {
            i ++;
        } else {
            j --
        }
    }
};
// @lc code=end

