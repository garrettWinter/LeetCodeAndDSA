/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    console.log(word.indexOf(ch));
    let temp = word.slice(0, word.indexOf(ch));
    temp = ch + temp.split("").reverse().join("") + word.slice((word.indexOf(ch) + 1), word.length);
    console.log(temp);
    return temp;
};

let word = "abcdefd", ch = "d";
reversePrefix(word, ch);