/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let resObj = {};
    for (let i = 0; i + 9 < s.length; i++) {
        let temp = s.substr(i, 10);
        if (!resObj[temp]) {
            resObj[temp] = 1;
        } else {
            resObj[temp] = 2;
        }
    }
    const res = [];
    Object.keys(resObj).map(key => {
        if (resObj[key] === 2) {
            res.push(key);
        }
    })
    return res;
};

