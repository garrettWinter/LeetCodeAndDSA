/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let results = [];

    for (let i = 0; i <= n; i++) {
        console.log(`looping on ${i}`);
        let currentCount = 0;
        let currentValue = i.toString(2);
        console.log(`Coverted String: ${currentValue}`);
        if (currentValue.includes("1")) {
            console.log(currentValue)
            let currentArray = currentValue.split("1");
            console.log(currentArray)
            currentCount = currentArray.length - 1;
            results.push(currentCount);

        } else {
            console.log(`pushing ${currentCount} to results`)
            results.push(currentCount);
        }


    }
    console.log(`Results Array: \n${results}`);
    return results;

};

let n = 5;
countBits(n);

/*
set empty results array

for loop based on n
    let oneCounter = 0;
    let current = n[i].toString(2);
    split current on 1
    count the length of current
    push the length to results
*/