/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    command = command.replaceAll(/\(\)/g, 'o');
    command = command.replaceAll(/\(al\)/g, 'al');
    console.log(command);
    return command;
};

let command = "G()(al)";
interpret(command);