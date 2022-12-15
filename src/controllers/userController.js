const UserModel = require("../models/userModel.js")
const BookSchema = require("../models/book.js")
const createUser = async function(req, res) {
    let data = req.body
    let savedData = await UserModel.create(data)

    res.send({ status: savedData })
}

const getUserdata = async function(req, res) {
    let alluser = await UserModel.find()
    res.send({ msg: alluser })

}


const createBook = async function(req, res) {
    let bookData = req.body
    let savedBook = await BookSchema.create(bookData)

    res.send({ status: savedBook })
}

const getBookdata = async function(req, res) {
    let allBook = await BookSchema.find()
    res.send({ books: allBook })

}
module.exports.createUser = createUser
module.exports.getUserdata = getUserdata
module.exports.createBook = createBook
module.exports.getBookdata = getBookdata