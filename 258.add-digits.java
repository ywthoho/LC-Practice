/*
 * @lc app=leetcode id=258 lang=java
 *
 * [258] Add Digits
 */

// @lc code=start
class Solution {
    public int addDigits(int num) {
        int res = num;
        while (res > 9) {
            int temp = 0;
            while (res > 0) {
                temp += res % 10;
                res = res / 10;
            }
            res = temp;
        }
        return res;
    }
}
// @lc code=end

