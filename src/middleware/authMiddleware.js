const jwt = require("jsonwebtoken");

const auth = function logMethod(req, res, next) {
    token = req.headers["x-auth-token"]
    if (!token)
        return res.send({
                status: false,
                msz: "token Not avabile"
            })
            // Decode token
    let decodedToken = jwt.verify(token, "sandeepmaurya");
    console.log(decodedToken)
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });

    // compare valid token or not |
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId

    if (userToBeModified != userLoggedIn)
        return res.send({ status: false, msz: "User and user's-token in not matched" })
    next()
}

module.exports.auth = auth