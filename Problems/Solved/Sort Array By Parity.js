/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let results = [];
    for(let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0 ){
            results.unshift(nums[i]);
        } else if (nums[i] % 2 !== 0 ) {
            results.push(nums[i]);
        };
    };
    console.log(results);
    return results;
};


let nums = [3,1,2,4];
sortArrayByParity(nums);