/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    console.log(`numberOfEmployeesWhoMetTarget has run`);
    let count = 0;
    for(let i = 0; i < hours.length; i++) {
        console.log(`for looping`)
        if( hours[i] >= target) {
            console.log(`if triggered ${hours[i]} is larger than ${target}`)
            count++;
        }
    };
    console.log(count);
    return count;
};

let hours = [5,1,4,2,2], target = 6
numberOfEmployeesWhoMetTarget(hours, target);