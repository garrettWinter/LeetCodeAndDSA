/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = '';
    for (let letterIndex = 0; letterIndex < strs[0].length; letterIndex++) {
        for (let arrayIndex = 1; arrayIndex < strs.length; arrayIndex++) {
            if (strs[0][letterIndex] === strs[arrayIndex][letterIndex]) {
            } else {
                console.log(commonPrefix);
                return commonPrefix
            };
        };
        commonPrefix = commonPrefix + strs[0][letterIndex]
    };
    console.log(commonPrefix);
    return commonPrefix;
};

let strs = ["flower","flow","flight"];
longestCommonPrefix(strs);