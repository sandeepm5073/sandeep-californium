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
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    next()
}

module.exports.auth = auth