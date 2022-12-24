const userValidation = function(req, res, next) {
    let data = req.headers
    console.log(data)
    let x = Object.keys(data)
    if (x.includes("isfreeuser")) {
        next()
    } else {
        res.send({ msg: "This detailes is required" })
    }
}

module.exports.userValidation = userValidation