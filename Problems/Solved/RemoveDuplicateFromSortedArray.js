/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (i = nums.length; i >= 0 ; i--) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i,1);
        };
    };
    console.log(nums);
    return;
};

let nums1 = [1,1,2];
let nums2 = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(nums1);
removeDuplicates(nums2);

/*
Loop through nums based on array length starting at 0
if I === I+1
    remove I index from array
    push "_" to end
    console.log(k, nums)
return
*/