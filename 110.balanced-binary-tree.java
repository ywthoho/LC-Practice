/*
 * @lc app=leetcode id=110 lang=java
 *
 * [110] Balanced Binary Tree
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
    public boolean isBalanced(TreeNode root) {
        return getDepth(root) != -1;
    }

    public int getDepth(TreeNode node) {
        if (node == null) return 0;
        int leftDepth = getDepth(node.left);
        int rightDepth = getDepth(node.right);
        if (leftDepth == -1 || rightDepth == -1) return -1;
        if (leftDepth - rightDepth > 1 || leftDepth - rightDepth < -1) return -1;
        return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
    }
}
// @lc code=end

