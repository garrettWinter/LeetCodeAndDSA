/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let i = 0; i < words.length; i++) {
        let checker = '';
        for (let w = words[i].length - 1; w >= 0; w--) {
            checker += words[i][w];
        };
        if (checker === words[i]) {
            return words[i];
        };
    };
    return '';
};

let words = ["abc","car","ada","racecar","cool"];
firstPalindrome(words);