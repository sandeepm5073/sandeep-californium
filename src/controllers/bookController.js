const { count } = require("console")
const BookModel = require("../models/bookModel")
const bookDetailes = require('../models/bookName')
const authorDetails = require('../models/authorName')
const { find } = require("../models/bookModel")
const authorName = require("../models/authorName")

// const createBook = async function(req, res) {
//     let data = req.body

//     let savedData = await BookModel.create(data)
//     res.send({ msg: savedData })
// }

// const getBooksData = async function(req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function(req, res) {
//     let data = req.body // {sales: "1200"}
//         // let allBooks= await BookModel.updateMany( 
//         //     { author: "SK"} , //condition
//         //     { $set: data } //update in data
//         //  )
//     let allBooks = await BookModel.findOneAndUpdate({ authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true }, // new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function(req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany({ authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true },
//     )

//     res.send({ msg: allBooks })
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks


const author = async function(req, res) {
    let data = req.body
    let savedData = await authorDetails.create(data)
    res.send({ msg: savedData })
}

const book = async function(req, res) {
    let data = req.body
    let savedData = await bookDetailes.create(data)
    res.send({ msg: savedData })
}

const bookAuthor = async function(req, res) {
    let data = req.body
    let allauthors = await authorDetails.findOne(data).select({ author_id: 1, _id: 0 })
    let allBooks = await bookDetailes.find(allauthors)
    res.send({ msg: allBooks })
}

const findAuthor = async function(req, res) {

    let data = req.body
    let updatedprice = await bookDetailes.findOneAndUpdate(data, { $set: { price: 100 } })
    let authorName = await authorDetails.findOne({ author_id: { $eq: updatedprice.author_id } })
    let finalResult = {}
    finalResult.author = authorName.author_id;
    finalResult.changeprice = updatedprice.price;
    res.send(finalResult)
}


const findBook = async function(req, res) {

    let authorName = []
    const bookData = await bookDetailes.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 })

    for (i in bookData) {
        authorName.push(await authorDetails.find(bookData[i]).select({ author_name: 1, _id: 0 }))
    }
    res.send(authorName)
}


module.exports.author = author
module.exports.book = book
module.exports.bookAuthor = bookAuthor
module.exports.findAuthor = findAuthor
module.exports.findBook = findBook