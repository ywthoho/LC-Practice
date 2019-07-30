/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
 */
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
var rightSideView = function(root) {
    if (!root) return [];
    let current = root;
    let currentRow = [current];
    const res = [current.val];
    while(currentRow.length) {
        let temp = [];
        let lastNode = null
        currentRow.map((node, index) => {
            if (node.left) {
                temp.push(node.left);
                lastNode = node.left;
            }
            if (node.right) {
                temp.push(node.right)
                lastNode = node.right;
            }
        })
        if (lastNode) {
            res.push(lastNode.val);
        }
        currentRow = temp;
    }
    return res;
};

