/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let x = i + 1; x < nums.length; x++)
            if (nums[i] + nums[x] === target) {
                console.log([i, x]);
                return [i, x]
            }
    }

};

let nums = [2,7,11,15];
let target = 9;
twoSum(nums, target);