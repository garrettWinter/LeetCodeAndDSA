/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let maxCount = 0;
    for (let i = 0; i < sentences.length; i++) {
        // let temp = sentences[i].split(' ');
        if (sentences[i].split(' ').length > maxCount) {
            maxCount = sentences[i].split(' ').length;
        };
    };
    console.log(maxCount);
    return maxCount;
};

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
mostWordsFound(sentences);


/*

define max count
for based on the length of the sentences array
    let temp = a split of sentences[i]
    if temp length > max count
        yes? set max count to temp length
return max count

*/