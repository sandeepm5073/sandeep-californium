const myBook = require('../models/newBook')
const MyAuthor = require('../models/newAuthor')
const MyPublisher = require('../models/newPublisher')
const mongoose = require('mongoose')
const { isValidObjectId } = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId


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


// const createBook = async function(req, res) {
//     let { author, publisher } = req.body
//     if (!author) {
//         return res.send("author id required")
//     }
//     if (!publisher) {
//         return res.send("publisher id required")
//     }
//     if (MyAuthor._id == !author.match(/^[0-9a-fA-F]{24}$/)) {
//         return res.send("author id not match")
//     }
//     if (!publisher.match(/^[0-9a-fA-F]{24}$/)) {
//         return res.send("publisher id not match")
//     }
//     let book = req.body
//     let savedBook = await myBook.create(book)
//     res.send({ data: savedBook })
// }
const createBook = async function(req, res) {

    let data = req.body
    let { author, publisher } = data
    if (!author) { return res.send("author id required") }
    if (!publisher) { return res.send("publisher id required") }

    let checkAuthor = await MyAuthor.findById(data.author)
    if (!checkAuthor) return res.send("no author data found")

    let checkPublisher = await MyPublisher.findById(data.publisher)
    if (!checkPublisher) return res.send("no publisher data found")

    let bookCreated = await myBook.create(data)
    res.send({ data: bookCreated })


}



const getBooksWithDetailes = async function(req, res) {

    let specificBook = await myBook.find().populate('author').populate('publisher')
    res.send({ data: specificBook })

}


const findId = async function(req, res) {

    let findBookByPublisher = await MyPublisher.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select({ _id: 1 })
        //const authorId = await MyAuthor.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    const arrOfPublisherId = findBookByPublisher.map(publisher => publisher._id)
    const result = await myBook.updateMany({ publisher: { $in: arrOfPublisherId } }, { $set: { isHardCover: true }, new: true })
        //const updatePrice = await myBook.updateOne({ rating: [authorId] }, { $inc: { price: 10 }, new: true })
    res.send(result)

}

const increase = async function(req, res) {

    const authorId = await MyAuthor.find({ rating: { $gt: 3.5 } })
    let arr = []
    for (let i = 0; i < authorId.length; i++) {
        const updatePrice = await myBook.updateMany({ author: authorId[i]._id }, { $inc: { price: 10 } })
        arr.push(updatePrice)
        return res.send(arr)
    }
}






module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.createBook = createBook
module.exports.getBooksWithDetailes = getBooksWithDetailes
module.exports.findId = findId
module.exports.increase = increase