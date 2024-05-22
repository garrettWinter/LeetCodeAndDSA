/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let score = 0;
    for (let i = 0; i < s.length; i++) {
        score = score + (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)));
    };
    console.log(score);
    return score;
};

let s = "hello";
scoreOfString(s);

/**

define a score variable

for loop based on the length of the string, minus 1
    score = score + (find the value of I)  - (Find the value of I + 1)
return score
 */