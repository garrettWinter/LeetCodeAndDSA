/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = '';
    while (s.includes("  ")){
        s = s.replaceAll("  ", " ")
    };
    let temp = s.split(" ");
    for(let i = temp.length -1; i >= 0; i--) {
        result += `${temp[i]} `;
    };
    result = result.trim();
    console.log(result);
    return result;
    };

    let s = "example 1";
    reverseWords(s);