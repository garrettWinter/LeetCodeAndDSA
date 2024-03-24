/**
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    let hours = time.substring(0, 2);
    let minutes = time.substring(3, 5);
    let count = [];
    let results = 0;
    if (hours === "??") {
        count.push(24);
    } else if (hours[0] === "?" && Number(hours[1]) < 4) {
        count.push(3);
    } else if (hours[0] === "?") {
        count.push(2);
    } else if (hours[1] === "?" && Number(hours[0]) === 2 ) {
        count.push(4);
    } else if (hours[1] === "?") {
        count.push(10);
    };
    if (minutes === "??") {
        count.push(60);
    } else if (minutes[0] === "?") {
        count.push(6)
    } else if (minutes[1] === "?") {
        count.push(10);
    };
    if (count.length === 0) {
        results = 1;
    } else if (count.length > 1) {
        results = count[0] * count[1];
    } else {
        results = count[0]
    };
    console.log(time);
    console.log(count);
    console.log(results);
    return results
};


let time = "12:00";
countTime(time);

/*
create a count array
create results varaible
Split the time into Hours and Minutes variables

Minutes Check
    If Ones minute = ? then push a 10 to a count array
    If 10s minute = ? then push a 6 a count array
    If both = ? then push 60 to a count array

Hours Check
    if ones hour = ? then 10 to a count array
    if 10 hour = ? then 2 to a count array
    if both = ? then push 24 to a count array

find the product from the count array and put in the results variable if array is larger than 1
return results


*/