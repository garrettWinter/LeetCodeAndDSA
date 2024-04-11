/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    let searchIndex;
    if (ruleKey === 'type') {
        searchIndex = 0;
    } else if (ruleKey === 'color') {
        searchIndex = 1;
    } else if (ruleKey === 'name') {
        searchIndex = 2;
    };

    for (let i = 0; i < items.length; i++) {
        if (items[i][searchIndex] === ruleValue) {
            count++;
        };
    };
    return count;
};

/*
Set count = 0
Init searchIndex
if chain setting the searchIndex based on rulesKey
Loop through items array
    Check to see if the searchIndex matches ruleValue
        Yes? - Increment Count
Return count
 */