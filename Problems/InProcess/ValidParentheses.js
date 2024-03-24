/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for(i = s.length; i > 0; i--){
        console.log(s[i]);
        console.log(s[i-1]);
        if(s[i]===s[i-1]){
            s.slice(i-1, i);
            console.log(s);
        }
    }

};

let s = "()[]{}";
isValid(s);



/*

Create stack

Loop on length, start at high number
    if string and stack empty, return true
    put string index into stack
    check to see if new last number is match
        if yes, remove last number and item from stack
        if no, check to see if next is valid bracket
            if yes, put into stack
            if no, return false

*/