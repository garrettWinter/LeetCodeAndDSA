/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let reversedString = "";
    let tracker = {
        string: "",
        length: 0
    };
    for (let i = 0; i < s.length; i++){
        for (let subI = s.length; subI >= 0; subI--){
            
        }
    }
    console.log(reversedString);
};

let s = "babad";

longestPalindrome(s);
/*

Create tracker object with count and string elements
loop on s.length starting at end
    reverse the string and see if matches
        if yes, put the length and string in the tracker
        If not, move on
remove first index letter
loop on new s.length starting at end
    reverse the string and see if matches
        if yes, put the length and string in the tracker
        If not, move on

NEED TO MERGE THE LOOPS TOGETHER I THINK

*/