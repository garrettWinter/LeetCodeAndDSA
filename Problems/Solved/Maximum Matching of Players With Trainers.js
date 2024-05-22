/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
    let results = 0;
    while (players && trainers) {
        for (let p = 0; p < players.length; p++) {
            console.log(`p: ${p}`);
            for (let t = 0; t < trainers.length; t++) {
                console.log(`t: ${t}`);
                if (players[p] <+ trainers[t]) {
                    results++;
                    players.splice(p, 1)
                    trainers.splice(t, 1);
                };
            };
        };
        break;

    };
    return results;
};


let players = [1, 1, 1], trainers = [10];
matchPlayersAndTrainers(players, trainers);
