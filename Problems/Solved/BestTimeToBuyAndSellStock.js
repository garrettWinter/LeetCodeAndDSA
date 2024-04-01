/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let cheapest = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        if (prices[i] < cheapest) {
            cheapest = prices[i];
        } else if (prices[i] - cheapest > profit) {
            profit = prices[i] - cheapest;
        };
    };
    return profit; 
};

/*

cheapest
profit 0

set cheapest to index 0
loop on array length starting at 1?
    if array[i] < cheapest
        Set cheapest to array[i]
    if array[i] - cheapest > profit
        set profit = array[i] - cheapest
return profit

*/