/*
 * @lc app=leetcode id=257 lang=java
 *
 * [257] Binary Tree Paths
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
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> res = new ArrayList<String>();
        if (root != null) buildPath(root, "", res);
        return res;
    }
    public void buildPath(TreeNode node, String path, List<String> res) {
        if (node.left == null && node.right == null) res.add(path + node.val);
        if (node.left != null) buildPath(node.left, path + node.val + "->", res);
        if (node.right != null) buildPath(node.right, path + node.val + "->", res);
    }
}
// @lc code=end

