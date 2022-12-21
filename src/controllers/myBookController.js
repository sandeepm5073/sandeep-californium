const myBook = require('../models/newBook')
const MyAuthor = require('../models/newAuthor')
const MyPublisher = require('../models/newPublisher')

const createAuthor = async function(req, res) {
    let author = req.body
    let authorCreated = await MyAuthor.create(author)
    res.send({ data: authorCreated })
}


const createPublisher = async function(req, res) {
    let publisher = req.body
    let publisherCreated = await MyPublisher.create(publisher)
    res.send({ data: publisherCreated })
}


const createBook = async function(req, res) {
    let book = req.body
    let hasId = false

    if (book.author) hasId = true
    if (hasId === false) {
        res.send({ msg: "plz add id" })
    } else {
        let savedBook = await myBook.create(book)
        res.send({ data: savedBook })
    }
}



module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.createBook = createBook