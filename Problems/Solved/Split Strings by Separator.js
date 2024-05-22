/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    let results = [];
    for (let w = 0; w < words.length; w++) {
        let temp = words[w].split(separator);
        console.log(temp);
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] !== '') {
                results.push(temp[i]);
            };
        };
    };
    console.log(results);
    return results;
};

let words = ["$easy$", "$problem$"], separator = "$"
splitWordsBySeparator(words, separator);