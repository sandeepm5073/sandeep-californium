const express = require('express');
const { application } = require("express")
const app = express();





const mid = async function(req, res, next) {
    let loggedin = true
    if (loggedin == true) {
        next()
    } else {
        res.send({ data: "middle" })
    }
}
const mid4 = async function(req, res, next) {
    console.log("mid4")
    next()

}
const mid1 = async function(req, res, next) {
    console.log("mid1")
    next()
}
const mid2 = async function(req, res, next) {
    console.log("mid2")
    next()
}


module.exports.mid = mid
module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid4 = mid4