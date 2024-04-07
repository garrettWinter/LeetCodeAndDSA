/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let result = '';
    let temp = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            for (let i1 = result.length - 1; i1 >= 0; i1--) {
                temp = temp + result[i1];
            };
            console.log(temp);
            result = temp;
            temp = '';
        } else {
            result = result + s[i];
        };
    };
    console.log(result);
    return result;
};

let s = "poiinter";
finalString(s);