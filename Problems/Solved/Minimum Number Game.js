/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let player1 = 0;
    let player2 = 0;
    let restultsArray = [];
    let turns = nums.length / 2;
    nums.sort((a, b) => a - b);
    for(let i = 0; i < turns; i++ ) { 
        player1 = nums.shift();
        player2 = nums.shift();
        restultsArray.push(player2);
        restultsArray.push(player1);
    };
    console.log(restultsArray);
    return restultsArray;
};


let nums = [5,4,2,3];

numberGame(nums);