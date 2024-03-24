/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    console.log(`Function has started`)
    if (obj === null) { return null };
    if (Array.isArray(obj)) {
        for (let arrayI = obj.length; arrayI >= 0; arrayI--) {
            if (Array.isArray(obj[arrayI])) {
                for (let subArrayI = obj[arrayI].length; subArrayI >= 0, subArrayI--;) {
                    if (!obj[arrayI][subArrayI]) {
                        obj[arrayI].splice(subArrayI, 1);
                    };
                };
            } else {
                if (!obj[arrayI]) {
                    obj.splice(arrayI, 1);
                };
            };
        };
    };
    for (let i = 0; i < Object.values(obj).length; i++) {
        console.log(`\nin first for loop, checking:`);
        console.log(Object.values(obj)[i])
        console.log(`\n`)
        if (Array.isArray(Object.values(obj)[i])) {
            console.log(`array condition met`)
            // console.log(Object.values(obj)[i].length);
            // console.log(Object.values(obj)[i][0]);
            for (let subI = 0; subI < Object.values(obj)[i].length; subI++) {
                console.log(`In second for loop`);
                console.log(Object.values(obj)[i]);
                if (!Object.values(obj)[i][subI]) {
                    console.log(`falsy detected in array`);
                    console.log(Object.values(obj)[i][subI]);
                    Object.values(obj)[i].splice(subI, 1);
                };
            };
        } else {
            if (!Object.values(obj)[i]) {
                console.log(`falsy detected in object value`);
                console.log(Array.isArray(obj));
                if (Array.isArray(obj)) {
                    console.log(`${obj[i]} is being removed from the main array`);
                    obj.splice(i, 1);
                    i++;
                }
                console.log(`${Object.values(obj)[i]} is being removed from the main object`);
                delete obj[Object.keys(obj)[i]];
                delete obj[Object.values(obj)[i]];
                i--;
                console.log(i);
                console.log(Object.values(obj).length);
            };
        };
    };
    console.log(`\nfinal product`)
    console.log(obj);
    return obj;
};


let obj = [0, 1, 0, [[[null, 0], false], false], false];
compactObject(obj);

/*
Loops on obj length
    if sub object length > 0
        loop in subobject[I]
            if subobject[I] == falsy
                 remove objec
    else
        if subobject[I] == falsy
            remove objec       
return obj
*/
