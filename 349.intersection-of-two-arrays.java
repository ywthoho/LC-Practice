import java.lang.reflect.Array;
import java.util.HashSet;

/*
 * @lc app=leetcode id=349 lang=java
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        HashSet<Integer> set = new HashSet<Integer>();
        ArrayList<Integer> res = new ArrayList<Integer>();
        for (int i = 0; i < nums1.length; i++) set.add(nums1[i]);
        for (int j = 0; j< nums2.length; j++) {
            if (set.contains(nums2[j])) {
                res.add(nums2[j]);
                set.remove(nums2[j]);
            }
        }
        int[] arr = new int[res.size()];
        for (int k = 0; k < res.size(); k ++) {
            arr[k] = res.get(k);
        }
        return arr;
    }
}
// @lc code=end

