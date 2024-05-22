/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let score = 0;
    let playLog = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "D") {
            playLog.push(Number(playLog[(playLog.length - 1)]) * 2);
        } else if (operations[i] === "C") {
            playLog.pop();
        } else if (operations[i] === "+") {
            playLog.push(Number((playLog[playLog.length - 2])) + Number((playLog[playLog.length - 1])));
        } else {
            playLog.push(Number(operations[i]));
            console.log(playLog);
        };
    };
    if (playLog.length === 0) {
        return score;
    } else {
        console.log(playLog);
        for (let s = 0; s < playLog.length; s++) {
            score += playLog[s];
        };
        console.log(score);
        return score;
    };
};

let operations = ["5","2","C","D","+"];
calPoints(operations);

/*
create score = 0
create empty playLog
loop on the operations based on its length starting at 0
    If i is a D
        Yes - find the last value in score and double it
    if i is a C
        Yes - remove the last playLog from the array
    if i is +
        Yes add a new playLog that is the sum last two values
    else
        Push to playLog array
if playLog length is 0, return score
else
    loop on the playLog based on its legnth starting at 0
        sum all values together

return score
    

 */