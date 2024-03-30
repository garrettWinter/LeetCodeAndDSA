/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let reverseString = '';
    let newString = s.toLowerCase();
    newString = newString.replace(/[^a-z0-9]/g , '');
    console.log(newString);
    for(let i = newString.length -1; i >= 0; i--) {
        reverseString = reverseString + newString[i];
    };
    if (newString === reverseString) {
        return true
    } else {
        return false
    };
};