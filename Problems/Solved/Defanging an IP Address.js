/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    console.log(`defangIPaddr has run`);
    address = address.replaceAll(".", "[.]");
    console.log(address);
    return address;
};

let address = "1.1.1.1";
defangIPaddr(address);

/**
    do a replaceAll on the address replacing the '.' with '[.]
    return string
 */