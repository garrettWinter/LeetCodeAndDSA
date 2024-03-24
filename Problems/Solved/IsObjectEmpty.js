/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    console.log(obj);
    if(Object.entries(obj).length > 0) {
        console.log(`False - Not Empty`)
        return false;
    } else {
        console.log(`True - Empty`);
        return true;
    }
};

let obj = [null, false, 0];
isEmpty(obj);