/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let queue = [s[0]];
    for (i = 1; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            queue.push(s[i]);
        } else {
            if (s[i] === ")") {
                if (queue[queue.length - 1] === "(") {
                    queue.pop();
                } else {
                    return false;
                };
            } else if (s[i] === "]") {
                if (queue[queue.length - 1] === "[") {
                    queue.pop();
                } else {
                    return false;
                };
            } else if (s[i] === "}") {
                if (queue[queue.length - 1] === "{") {
                    queue.pop();
                } else {
                    return false;

                };
            };
        };
    };
    if (queue.length !== 0) {
        return false;
    }
    return true;
};

let s = "()[]{}";
isValid(s);


/*
set a queue []

loop on s
    check to see if a opening tag
        Yes?
            Push to queue
        No?
            Check to see if last item in queue is the starting of that bracket type
                Yes
                    remove the last item from queue
                No
                    return false
return true

*/