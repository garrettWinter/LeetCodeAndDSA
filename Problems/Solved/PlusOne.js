/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let results = [];
    let value = "";
    for (const digit of digits) {
        value = value + digit
    };
    value = BigInt(value) + 1n;
    value = String(value);
    for (index = 0; index < value.length; index++) {
        results.push(Number(value[index]));
    }
    console.log(results);
    return results
};

let digits = [1,2,3];
plusOne(digits);