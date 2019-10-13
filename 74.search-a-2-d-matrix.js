/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let l = 0;
    let r = matrix.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (matrix[m][0] <= target && matrix[m][matrix[m].length - 1] >=target) {
            let left = 0;
            let right = matrix[m].length - 1;
            while (left <= right) {
                let mid = left + Math.floor((right - left) / 2);
                if (matrix[m][mid] === target) return true;
                else if (matrix[m][mid] > target) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            return false
        } else if (matrix[m][0] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return false;
};
// @lc code=end

