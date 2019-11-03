/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {
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
    
    for(let i = 0; i < res.length - 1; i++) {
        if (res[i] >= res[i + 1]) return false
    }
    return true;
};
// @lc code=end

