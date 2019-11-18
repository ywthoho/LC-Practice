/*
 * @lc app=leetcode id=242 lang=java
 *
 * [242] Valid Anagram
 */

// @lc code=start
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] alphabet = new int[26];
        for(int i = 0; i < s.length(); i++) {
            alphabet[s.charAt(i) - 'a'] ++;
        }
        for (int j = 0; j< t.length(); j++) {
            alphabet[t.charAt(j) - 'a']--;
        }
        for (int i : alphabet) {
            if (i != 0)return false;
        }
        return true;
    }
}
// @lc code=end

