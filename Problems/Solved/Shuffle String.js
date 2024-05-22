/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    console.log(`restoreString has run`);
    let results = '';
    let currentIndex = 0;
    while (currentIndex <= s.length - 1) {
        console.log(`New While loop`)
        for (let i = 0; i < indices.length; i++) {
            console.log(`for loop has triggered`);
            if (currentIndex == indices[i]) {
                console.log(`if has been meet`)
                results += s[i];
                currentIndex++;
            };
        };
    };
    console.log(results);
    return results;
};

let s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3];
restoreString(s, indices);

/*
set results
for loop based on the length of the string
    for loop based on the indices
        check if the indice value === to index
            yes? push the char at the indices index to the results AND increse s index
return results

*/