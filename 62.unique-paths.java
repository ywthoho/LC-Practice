/*
 * @lc app=leetcode id=62 lang=java
 *
 * [62] Unique Paths
 */

// @lc code=start
class Solution {
    public int uniquePaths(int m, int n) {
        int[][] board = new int[m][n];
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j ++) {
                if (i == 0 || j == 0) board[i][j] = 1;
                else board[i][j] = board[i - 1][j] + board[i][j - 1];
            }
        }
        
        return board[m - 1][n - 1];
    }
}
// @lc code=end

