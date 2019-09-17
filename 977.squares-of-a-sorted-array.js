/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    const res = [];
    let i = 0;
    let j = A.length - 1;
    while(i <= j) {
        let tempI = A[i] < 0 ? -A[i] : A[i];
        let tempJ = A[j] < 0 ? -A[j] : A[j];

        if (tempI > tempJ) {
            res.unshift(A[i] * A[i]);
            i++;
        } else {
            res.unshift(A[j] * A[j]);
            j--;
        }
    }
    return res;
};

