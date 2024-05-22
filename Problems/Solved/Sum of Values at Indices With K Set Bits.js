/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    let results = 0;
    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        let string = i.toString(2);
        for (let j = 0; j < string.length; j++) {
            if (string[j] == '1') {
                counter++;
            };
        };
        if (counter == k) {
            results += nums[i];
        };
    };
    return results;
};

/*
let results;
for loop on nums
    let count = 0;
    convert [i] to a binary string 
    loop through binary value
        increment a counter for each i found in the string
        if counter = k
            Then add nums[i] to results
return results
 */