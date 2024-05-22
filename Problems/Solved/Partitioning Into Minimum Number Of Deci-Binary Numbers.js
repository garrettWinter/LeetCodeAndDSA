/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let count = 0;
    for(let i = 0; i < n.length; i++){
        if ( n[i] > count) {
            count = n[i];
        };
    };
    console.log(count);
    return count;
};

let n = "27346209830709182346";
minPartitions(n);