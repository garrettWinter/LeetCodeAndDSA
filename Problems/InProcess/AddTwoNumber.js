/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let value1 = '';
    let value2 = '';
    let sum = 0;
    let results = [];
    for (let l1Index = l1.length -1 ; l1Index >= 0; l1Index--){
        value1 = value1 + l1[l1Index];
    };
    value1 = Number(value1);
    for (let l2Index = l2.length - 1; l2Index >= 0; l2Index--) {
        value2 = value2 + l2[l2Index];
    };
    value2 = Number(value2);
    sum = value1 + value2;
    sum = String(sum);
    for (let i = sum.length -1; i >= 0; i--) {
        results.push(sum[i]);
    }
    console.log(results);
    return results

};

let l1 = [2,4,3];
let l2 = [5,6,4];
addTwoNumbers(l1, l2);
