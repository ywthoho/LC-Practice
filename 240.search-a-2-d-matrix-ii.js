/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].lenght) return false;
    let rowSize = matrix[0].length;
    let row = 0;
    let col = rowSize - 1;
    while (row < matrix.length && col >= 0) {
      if (matrix[row][col] == target) return true;
      else if (matrix[row][col] > target) {
        col --;
      } else {
        row ++;
      }
    }
    return false
};
// @lc code=end
// [[1,1]] 2
