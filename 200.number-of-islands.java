/*
 * @lc app=leetcode id=200 lang=java
 *
 * [200] Number of Islands
 */

// @lc code=start
class Solution {
    public int numIslands(char[][] grid) {
        int count = 0;
        
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == '1') {
                    dfsMark(i, j, grid);
                    ++count;
                }
            }
        }
        return count;
    }
    
    public void dfsMark(int i, int j, char[][] grid) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] != '1') {
            return;
        }
        grid[i][j] = '0';
        dfsMark(i - 1, j, grid);
        dfsMark(i + 1, j, grid);
        dfsMark(i, j - 1, grid);
        dfsMark(i, j + 1, grid);
        return;
    }
}
// @lc code=end

