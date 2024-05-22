/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let xArray = [];
    let yArray = [];
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        if (i < n) {
            xArray.push(nums[i])
        } else {
            yArray.push(nums[i])
        };
    };
    for (let j = 0; j < n; j++) {
        results.push(xArray[j]);
        results.push(yArray[j]);
    };
    return results;
};

// create empty xArray
// create empty yArray
// create results

// loop through nums
//     if i < n
//         add to to xArray
//     else
//         add to yArray
// for loop based on n
//     push xArray[i] to results
//     push yArray[i] to results
// return results
