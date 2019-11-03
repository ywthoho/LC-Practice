import java.util.ArrayList;
import java.util.LinkedList;

import javax.swing.tree.TreeNode;

/*
 * @lc app=leetcode id=103 lang=java
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        travel(root, result, 0);
        return result;
    }

    public void travel(TreeNode node, List<List<Integer>> result, int level) {
        if (node == null) return;
        if (result.size() <= level) {
            List<Integer> newLevel = new LinkedList<>();
            result.add(newLevel);
        }

        List<Integer> collection = result.get(level);
        if (level % 2 == 0) collection.add(node.val);
        else collection.add(0, node.val);

        travel(node.left, result, level + 1);
        travel(node.right, result, level + 1);
    }
}
// @lc code=end

