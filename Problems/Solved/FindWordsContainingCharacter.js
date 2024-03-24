/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let word = '';
    let results = [];
    for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
        word = words[wordsIndex];
        for (let i = 0; i < word.length; i++) {
            if (word[i] === x) {
                results.push(wordsIndex);
                break;
            }
        };
    };
    console.log(results);
    return results
};

let words = ["abc","bcd","aaaa","cbc"];
let x = "b";

findWordsContaining(words, x);

/*

Create results array
loop through on the length if words array
loop through length of current word
    check to see if index is equal to X
        If yes, push index to results array and break
return results array

*/