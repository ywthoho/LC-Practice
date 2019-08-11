/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const sorted = [nums[0]];
    function customSort(a, b) {
        let sa = a + '';
        let sb = b + '';
        let temp1 = sa + sb;
        let temp2 = sb + sa;
        return Number(temp1) > Number(temp2)
    }
    for (let i = 1; i < nums.length; i++) {
        let sortedLength = sorted.length;
        for (let j = 0; j < sortedLength; j++) {
            if (customSort(nums[i], sorted[j])) {
                sorted.splice(j, 0, nums[i]);
                break;
            } else if (j === sorted.length - 1) {
              sorted.push(nums[i]);
            }
        }
    }
    let res = '';
    
    sorted.map(num => res += num);
    if (/^0+/.test(res)) res = '0';
    return res;
};

