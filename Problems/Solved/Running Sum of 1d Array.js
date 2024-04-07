/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let count = 0;
    let results = [];
    for(let i = 0; i < nums.length; i++) {
        count = count + nums[i];
        results.push(count);
    };
    console.log(results);
    return results;  
};

let nums = [1,2,3,4];
runningSum(nums);