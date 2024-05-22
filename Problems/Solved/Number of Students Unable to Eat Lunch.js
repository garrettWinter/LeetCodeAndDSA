/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    let hopefulStudents = true;
    while (hopefulStudents && students.length > 0) {
        console.log(`\nnew loop`);
        let sandwichTaken = false;
        for (let i = 0; i < students.length; i++) {
            if (students[i] == sandwiches[0]) {
                students.splice(i,1);
                sandwiches.shift();
                sandwichTaken = true;
                console.log(`liked, eatting ${students[i]} ${sandwiches[0]}`);
                console.log(students)
                console.log(sandwiches)
                break;
            }
        };
        if (!sandwichTaken) {
            console.log(`No sandwich taken, ending`);
            console.log(students)
            console.log(sandwiches)
            hopefulStudents = false;
        };
    };
    return students.length;
};

// let students = [1, 1, 0, 0], sandwiches = [0, 1, 0, 1];

/*
set hopeful = true

while hopeful is true AND length of students not 0
    set sandwichTaken = false
    for loop on students
        if and sandwich match
            Yes - remove sandwich and student from queue AND update sandwichTaken to true
            no  - move student to the end of the queue
        if standwichTaken is still false at end of loop
            Yes - set hopeful to false
return length of students
        



 */