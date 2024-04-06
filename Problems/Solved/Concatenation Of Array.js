/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    console.log(`getConcatenation has run`);
    let result = [];
    console.log(typeof result)
    for (let i = 0; i < 2; i++) {
        for (let i1 = 0; i1 < nums.length; i1++) {
            result.push(nums[i1]);
        };
    };
    console.log(result);
    return result;
};

let nums = [1, 3, 2, 1];
getConcatenation(nums);