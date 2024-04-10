/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let results = 0;
    for(let i = 0; i < operations.length; i++) {
        if (operations[i] === "X++" || operations[i] === "++X") {
            results++;
        } else if (operations[i] === "X--" || operations[i] === "--X") {
            results--
        };
    };
    console.log(results);
    return results;
};

let operations = ["--X","X++","X++"]
finalValueAfterOperations(operations);