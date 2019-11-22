import java.util.Arrays;

/*
 * @lc app=leetcode id=345 lang=java
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
class Solution {
    public String reverseVowels(String s) {
        int i = 0;
        int j = s.length() - 1;
        char[] arr = s.toCharArray();
        char[] vowels = {'a', 'e', 'i', 'o', 'u'};
        while(i < j) {
            while (!arrContain(vowels, arr[i])) {
                if (i >= j) break;
                i++;
            }
            while (!arrContain(vowels, arr[j])) {
                if (i >= j) break;
                j--;
            }
            char temp = arr[i];
            arr[i++] = arr[j];
            arr[j--] = temp;
        }
        return arr.toString();
    }
    public boolean arrContain(char[] arr, char item) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == item) return true;
        }
        return false;
    }
}
// @lc code=end

