/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    console.log(Object.entries(obj));
    if (Object.entries(obj).length > 0) {
        console.log(false);
        return false;
    } else {
        console.log(true);
        return true;
    }
};

let obj = { "x": 5, "y": 42 };
isEmpty(obj);