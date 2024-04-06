/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    console.log(`function has run`)
    let current = 0;
    let richest = 0;
    for (let i = 0; i < accounts.length; i++) {
        console.log(`outer loop`)
        for (let i2 = 0; i2 < accounts[i].length; i2++) {
            console.log(`inner loop`)
            current = current + accounts[i][i2];
            console.log(current);
        }
        if (current > richest) {
            console.log(`if has triggered`)
            richest = current;
        }
        current = 0;
    }
    console.log(richest)
    return(richest)
};

let accounts = [[1,5],[7,3],[3,5]];
maximumWealth(accounts);