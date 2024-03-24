/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let results = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let temp = [nums[i], nums[j], nums[k]];
                    temp.sort();
                    if (results.length === 0) {
                        results.push(temp);
                        console.log(`Logging results after inital push:`);
                        console.log(results);
                    } else {
                        let isDuplicate = false;
                        for (let d = 0; d < results.length; d++) {
                            console.log("\nDetermining if Duplicate")
                            console.log(results[d]);
                            console.log(temp);
                            if (results[d].toString() === temp.toString()) {
                                console.log(`Duplicate found: ${temp}`)
                                isDuplicate = true;
                            };

                        }
                        if (isDuplicate === false) {
                            console.log(`no Duplicate found, pushing to array`)
                            results.push(temp);
                            console.log(results);
                        }
                    }
                }
            }
        }

    }
    console.log(`Results\n`);
    console.log(results);
    return results;
};

// COULD IS NOT PERFORMANT AND IS TIMING OUT ON THE CURRENT NUMS ARRAY

let nums = [8, 5, 12, 3, -2, -13, -8, -9, -8, 10, -10, -10, -14, -5, -1, -8, -7, -12, 4, 4, 10, -8, 0, -3, 4, 11, -9, -2, -7, -2, 3, -14, -12, 1, -4, -6, 3, 3, 0, 2, -9, -2, 7, -8, 0, 14, -1, 8, -13, 10, -11, 4, -13, -4, -14, -1, -8, -7, 12, -8, 6, 0, -15, 2, 8, -4, 11, -4, -15, -12, 5, -9, 1, -2, -10, -14, -11, 4, 1, 13, -1, -3, 3, -7, 9, -4, 7, 8, 4, 4, 8, -12, 12, 8, 5, 5, 12, -7, 9, 4, -12, -1, 2, 5, 4, 7, -2, 8, -12, -15, -1, 2, -11];
console.log(nums.length)
// threeSum(nums);

/*
checkto see if array lenth < 3
    Yes? return blank
if length =3
    Yes, sum values
    Check to see If values = 0
        Yes? Add values to a return array
if length > 3
    Loop through adding I + I+1 + I+2 while i < length -2
        If values = 0
            Yes? Add values to a return array
return the return array
*/
