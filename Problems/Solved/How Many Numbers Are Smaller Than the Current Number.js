/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        console.log(`outterloop`);
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            console.log(`inner loop`);
            if (nums[j] < nums[i]) {
                counter++;
            };
        };
        results.push(counter);
    };
    console.log(results);
    return results;

};

let nums = [8, 1, 2, 2, 3];
smallerNumbersThanCurrent(nums);

/*
set results

outter loop on nums length
    set a counter to 0
    inner loop
        if nums[j] < nums[i] && i != j
            Yes - Increment counter
    push counter to results
return results
*/