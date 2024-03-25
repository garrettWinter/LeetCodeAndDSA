/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    console.log(`singleNumber Function has run`);

    let tracker = {};

    for (let i = 0; i < nums.length; i++) {
        tracker[nums[i]] = tracker[nums[i]] + 1 || 1;
    };

    console.log(tracker);

    for (let t in tracker) {
        if (tracker[t] === 1) {
            console.log(t)
        }
    }

};

let nums = [4, 1, 2, 1, 2];
singleNumber(nums);

/*
create a place holder object
loop through the nums array based on its length
    look at each index and put that value into tracker object
Loop through the tracker object
    Look for value for 1 and return that object key

*/