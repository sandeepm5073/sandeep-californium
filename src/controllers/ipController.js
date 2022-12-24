const ip = require('ip');
var express = require('express');

var moment = require('moment');




let demoLogger = (req, res, next) => {
    let loggedIn = true
    if (loggedIn == true) {
        let formatted_date = (moment().format('YYYY-MM-DD h:mm:ss'));
        let url = req.url;
        let ipAddress = ip.address()
        let log = `${formatted_date}, ${ipAddress}, ${url} `;
        console.log(log);
        next();
    } else {
        res.send({ status: false, msg: "you are not loggedin" })
    }
};

module.exports.demoLogger = demoLogger