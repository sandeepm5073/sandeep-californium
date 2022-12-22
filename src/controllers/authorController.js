const AuthorModel = require("../models/authorModel")

const basicCode = async function(req, res) {
    res.send({ msg: "this coming from controller" })
}


const createAuthor = async function(req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({ data: authorCreated })
}

const getAuthorsData = async function(req, res) {
    let authors = await AuthorModel.find()
    res.send({ data: authors })
}

module.exports.createAuthor = createAuthor
module.exports.getAuthorsData = getAuthorsData
module.exports.basicCode = basicCode