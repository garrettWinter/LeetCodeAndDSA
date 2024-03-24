/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        switch (s[i]) {
            case "I":
                sum = sum + 1;
                break;
            case "V":
                sum = sum + 5;
                if (s[i - 1] === "I") {
                    sum = sum - 1;
                    i--
                };
                break;
            case "X":
                sum = sum + 10;
                if (s[i - 1] === "I") {
                    sum = sum - 1;
                    i--
                };
                break;
            case "L":
                sum = sum + 50;
                if (s[i - 1] === "X") {
                    sum = sum - 10;
                    i--
                };
                break;
            case "C":
                sum = sum + 100;
                if (s[i - 1] === "X") {
                    sum = sum - 10;
                    i--
                };
                break;
            case "D":
                sum = sum + 500;
                if (s[i - 1] === "C") {
                    sum = sum - 100;
                    i--
                };
                break;
            case "M":
                sum = sum + 1000;
                if (s[i - 1] === "C") {
                    sum = sum - 100;
                    i--
                };
                break;
            default:
                break;
        };
    }
return sum
};

let s = 'MMMCMXCIX';

romanToInt(s);


/*

set a sum varaible

Loop through s based on length of string
look at highest index value, and swtich case matching letters and assigning points
    Run a if checking to see if they are predicated by a value to subtract (IE IV = 4)
return sum

*/