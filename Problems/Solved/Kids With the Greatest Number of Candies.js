/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    console.log(`kidsWithCandies has run`);
    let results = [];
    let mostCandies = 0;

    for (let i1 = 0; i1 < candies.length; i1++) {
        if (candies[i1] > mostCandies) {
            mostCandies = candies[i1];
        }
    };

    console.log(`most candies is ${mostCandies}`)
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= mostCandies) {
            results.push(true)
        } else {
            results.push(false)
        };

    };
    console.log(results)
    return results
};

let candies = [2, 3, 5, 1, 3], extraCandies = 3;
kidsWithCandies(candies, extraCandies);
