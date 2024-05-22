/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
    console.log(`isStrictlyPalindromic has run`);
    if (n < 2 || n > 35) {
        return false;
    };
    for (let i = n; i > 2; i--) {
        let temp = n.toString(i);
        let reverseTemp = temp.split("").reverse().join("");
        if (temp !== reverseTemp) {
            console.log(false);
            return false;
        }
    };
    console.log(true);
    return true;
};

let n = 50;
isStrictlyPalindromic(n); 