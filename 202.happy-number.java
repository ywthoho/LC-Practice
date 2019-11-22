import java.util.HashSet;

/*
 * @lc app=leetcode id=202 lang=java
 *
 * [202] Happy Number
 */

// @lc code=start
class Solution {
    public boolean isHappy(int n) {
        Set<Integer> set = new HashSet<Integer>();

        while (set.add(n)) {
            int temp = cal(n);
            if (temp == 1) return true;
            else n = temp;
        }
        return false;
    }

    public int cal(int n) {
        int sum = 0;
        while(n > 0) {
            sum += (n % 10) * (n % 10);
            n = n /10;
        }
        return sum;
    }
}
// @lc code=end

