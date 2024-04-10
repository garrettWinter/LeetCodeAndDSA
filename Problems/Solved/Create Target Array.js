/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    for(let i = 0; i < nums.length; i++){
        target.splice(index[i],0,nums[i])
    };
    console.log(target);
    return target;
};

let nums = [0,1,2,3,4], index = [0,1,2,2,1];
createTargetArray(nums, index);