/*
 * @lc app=leetcode id=129 lang=java
 *
 * [129] Sum Root to Leaf Numbers
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int sumNumbers(TreeNode root) {
        return sum(root, 0);
    }

    public int sum(TreeNode node, int num) {
        if (node == null) return 0;
        if (node.left == null && node.right == null) {
            return num * 10 + node.val;
        }
        return sum(node.left, num * 10 + node.val) + sum(node.right, num * 10 + node.val);
    }
}
// @lc code=end

