/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let s = 0; s < stones.length; s++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[s]) {
                count++
            };
        };
    };
    console.log(count);
    return count;
};

let jewels = "z", stones = "ZZ";
numJewelsInStones(jewels, stones);

/*
    define count
    For loop through stones based on lenght
        for loop through jewels based on length
            check to see if jewels[j] === stones[s]
                yes? increment count
    return count
*/