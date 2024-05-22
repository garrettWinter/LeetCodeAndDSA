/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let stack = [];
    let results = [];
    let currentIndex = 0;
    let stream = 1;
    let building = true;

    if (target.length === 0) {
        return results;
    };

    //Loading first entry into the stack and results.
    stack.push(stream);
    results.push("Push");
    stream++;

    while (building) {
        console.log(`${stack[currentIndex]} and ${target[currentIndex]}`)
        if (stack[currentIndex] === target[currentIndex]) {
            if (stack.length === target.length) {
                building = false;
                break;
            };
            stack.push(stream);
            results.push("Push");
            stream++;
            currentIndex++;
        } else {
            stack.pop();
            results.push("Pop");
            stack.push(stream);
            results.push("Push");
            stream++;
        };
        console.log(target);
        console.log(stack);
        console.log(results);
    };
    console.log(results);
    return results;

};

let target = [1, 3], n = 3;
buildArray(target, n);

/*
create empty stack array
create empty results array
create current index = 0
create stream = 1

while stack != target
    if stack length = 0
        push stream to stack
        push "Push" to results
        increment stream
        increment current index
    check to see if current index value = stream
        yes?
            Push the stream to stack
            push "push" to results
            increment stream
            increment current index
        No?
            push "Pop" to results
            pop the stack

            Push the stream to stack
            push "push" to results
            increment stream
return results
*/
