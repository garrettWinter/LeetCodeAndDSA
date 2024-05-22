/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let results = 0;
    let leftPointer = 0;
    let rightPointer = nums.length -1;

    nums = nums.sort(((a, b) => a - b));
    while (leftPointer < rightPointer) {
        if(nums[leftPointer] + nums[rightPointer] < target){
            results += rightPointer - leftPointer;
            leftPointer++;
        } else {
            rightPointer--;
        };
    };
    console.log(results);
    return results;

};

let nums = [-6,2,5,-2,-7,-1,3], target = -2
countPairs(nums, target);


/*
set count var to 0
set leftPoint to 0
set rightPointer to nums length -1

sort array
run while loop that LP < RP
    check to see if lp and rp is less than target
        yes increment count by RP - LP
        LP++
        No - RP--
return count

*/