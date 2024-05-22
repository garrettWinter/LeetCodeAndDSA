/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    nums = nums.sort(((a, b) => a - b));
    let numsIndexLength = nums.length - 1;
    console.log((nums[numsIndexLength] - 1) * (nums[numsIndexLength - 1] - 1));
    return (nums[numsIndexLength] - 1) * (nums[numsIndexLength - 1] - 1);

};

let nums = [1,5,4,5];
maxProduct(nums);