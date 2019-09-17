/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// recursive
// var rob = function(nums) {
//     function getMax(houses, index) {
//         if (index < 0) {
//             return 0;
//         }
//         let res = houses[index] + getMax(houses, index - 2) > getMax(houses, index - 1) ?
//             houses[index] + getMax(houses, index - 2) :
//             getMax(houses, index - 1);
//         return res;
//     }
//     return getMax(nums, nums.length - 1);
// };

// recursive + memo
// var rob = function(nums) {
//     const memo = {};
//     function getMax(houses, index) {
//         if (memo[index]) return memo[index];
//         if (index < 0) {
//             return 0;
//         }
//         let res = houses[index] + getMax(houses, index - 2) > getMax(houses, index - 1) ?
//             houses[index] + getMax(houses, index - 2) :
//             getMax(houses, index - 1);
//         memo[index] = res;
//         return res;
//     }
//     return getMax(nums, nums.length - 1);
// };

// iterate
var rob = function(nums) {
    const resArr = [];
    resArr[0] = 0;
    resArr[1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let val = nums[i]
        resArr[i+1] = resArr[i] > resArr[i - 1] + val ? resArr[i] : resArr[i - 1] + val
    }
    return resArr[nums.length];
}

// iterate with no-memo but two temp variables
// ...

