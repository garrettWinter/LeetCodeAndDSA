/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let temp;
    let result = s;
    while (result.indexOf(part) !== -1) {
        temp = result.replace(part, "");
        result = temp;
    };
    return result;
};