/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    for(let i = 0; i < details.length; i++){
        if( String(details[i]).substring(11,13) > 60) {
            count++;
        };
    };
    return(count);   
};

let details = ["7868190130M7522","5303914400F9211","9273338290F4010"];
countSeniors(details);