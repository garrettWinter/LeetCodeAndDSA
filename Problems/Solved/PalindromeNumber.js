/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let value = `${x}`;
    let reversedValue = undefined;
    for (i = value.length; i >= 0; i--) {
        if (reversedValue === undefined) {
            reversedValue = value[i];
        } else {reversedValue = reversedValue + value[i];}
    }
    if (reversedValue == value) {
        console.log (true);
        return true
    } else {
        console.log (false);
        return false }
};

let x = 121;
isPalindrome(x);