/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    console.log(`truncate has run`);
    let result = '';
    let words = s.split(" ");
    console.log(words);
    for(let i = 0; i <= k - 1;i++){
        result += ` ${words[i]}`;
    };
    console.log(`result: ${result}`)
    return result.trim();
};

let s = "Hello how are you Contestant", k = 4;
truncateSentence(s, k);