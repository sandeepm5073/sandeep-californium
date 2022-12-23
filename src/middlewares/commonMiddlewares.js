const ip = require('ip');
var express = require('express');
var app = express();
var moment = require('moment');


// const mid1 = function(req, res, next) {
//     req.falana = "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2 = function(req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3 = function(req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4 = function(req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }


let demoLogger = (req, res, next) => {
    let loggedIn = true
    if (loggedIn == true) {
        let formatted_date = (moment().format('YYYY-MM-DD h:mm:ss'));
        let url = req.url;
        ipAddress = ip.address()
        let log = `${formatted_date}, ${ipAddress}, ${url} `;
        console.log(log);
        next();
    } else {
        res.send({ status: false, msg: "you are not loggedin" })
    }
};

app.use(demoLogger)


// module.exports.mid1 = mid1
// module.exports.mid2 = mid2
// module.exports.mid3 = mid3
// module.exports.mid4 = mid4

module.exports.demoLogger = demoLogger