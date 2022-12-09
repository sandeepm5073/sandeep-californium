const date = function() {
    const date1 = new Date().toLocaleDateString("de-DE");
    console.log(date1);
}

const month = function() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const date = new Date();
    console.log(months[date.getMonth()] + ' ' + date.getFullYear())
}

const batchInfo = function() {
    console.log("Californium, W3D4, the topic for today is Nodejs module system")
}
module.exports.date = date
module.exports.month = month
module.exports.batchInfo = batchInfo