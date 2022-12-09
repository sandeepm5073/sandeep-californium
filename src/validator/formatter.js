const trim1 = function() {
    const str = "   functionUp     ";
    const st = str.trim();
    console.log(st);
}

const str2 = function() {
    let text = "Hello World!";
    let result = text.toLowerCase();
    console.log(result)
}
const str3 = function() {
    let text = "heLlo World!";
    let result = text.toUpperCase();
    console.log(result)
}

module.exports.trim = trim1
module.exports.str2 = str2
module.exports.str3 = str3