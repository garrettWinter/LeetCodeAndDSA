/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    let wasBFound = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'b') {
            wasBFound = true;
        } else if (wasBFound === true && s[i] === 'a') {
            return false;
        };
    };
    return true;
};

/*
set bFlag false
loop on s length
    if bFlag === true AND i = a return false
    if i === b set bFlag to true
return true
 */