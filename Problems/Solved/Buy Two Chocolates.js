/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    prices.sort(((a, b) => a - b));
    if (money - (prices[0] + prices[1]) >= 0) {
        return money - (prices[0] + prices[1]);

    } else {
        return money;
    }

};

// sort the array
// check to see if index 0 and 1 are less than money
//     yes - return money - (index 0 + index 0 )
//     no - return money