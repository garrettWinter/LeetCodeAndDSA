/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    while (nums1.length > m) {
        nums1.pop();
    };
    while (nums2.length > n) {
        nums2.pop();
    };
    for (let i2 = nums2.length - 1; i2 >= 0; i2--) {
        nums1.push(nums2[i2]);
    };
    nums1.sort((a, b) => a - b);
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);

