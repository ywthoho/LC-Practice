/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // const res = [];
    // function inorderRecursion(node) {
    //     if (node) {
    //         if (node.left) inorderRecursion(node.left);
    //         res.push(node.val);
    //         if (node.right) inorderRecursion(node.right);
    //     }
    // }
    // inorderRecursion(root);
    // return res;
    const res = [];
    const stack = [];
    let node = root;
    while(node || stack.length > 0) {
        if (node) {
            stack.unshift(node);
            node = node.left;
        } else {
            node = stack.shift();
            res.push(node.val);
            node = node.right;
        }
        
    }
    return res;
};
// @lc code=end

