const { count, Console } = require("console")
const productModel = require("../models/productModel")
const userDocModel = require("../models/userDocument")
const orderModel = require("../models/orderModel")

const createProduct = async function(req, res) {

    let data = req.body
    let savedData = await productModel.create(data)
    res.send({ msg: savedData })
}


const createUser = async function(req, res) {

    let data = req.body
    let User = req.headers["isfreeuser"]
    data.isFreeUser = User
    let savedData = await userDocModel.create(data)
    res.send({ msg: savedData })
}


const createOrder = async function(req, res) {
        let data = req.body
        let isFreeUser = req.isFreeUser
        let uId = data.userId
        let pId = data.productId
        let amount = data.amount
        if (uId) {
            if (!pId) { res.send({ msg: "product id is need" }) }
        } else res.send({ msg: "user id is needed" })


        let user = await userDocModel.findById(uId)

        if (!user) { return res.send({ msg: "invalid user id" }) }

        let product = await productModel.findById(pId)

        if (!product) { return res.send({ msg: "invalid product id" }) }



        if (isFreeUser) {
            // let updatedata = await orderModel.findByIdAndUpdate(uId, { $set: { amount: 0 } }, { new: true })
            let update = await orderModel.findByIdAndUpdate(uId, { $set: { amount: 0 } }, { new: true, upsert: true })
            let savedData = await orderModel.create(data)
            res.send({ msg: savedData, user1: update })
        }


        let balance = user.balance
        let price = product.price
        let cost = price * amount;

        if (balance > cost) {
            let update = await userDocModel.findByIdAndUpdate(uId, { $set: { balance: (balance - cost) } }, { new: true })
            amount = await orderModel.findByIdAndUpdate(uId, { $set: { amount: price } }, { new: true })
            let savedData = await orderModel.create(data)
            res.send({ msg: savedData, user2: update })
        } else {
            return res.send({ msg: "insufficent balance" })
        }

    }
    // let order = req.headers["isfreeuser"]
    // data.isFreeUser = order

// let { userId, productId } = data
// if (!userId) { return res.send("user id required") }
// if (!productId) { return res.send("product id required") }

// let checkUser = await userDocModel.findById(data.userId)
// if (!checkUser) return res.send("no author data found")

// let checkProduct = await productModel.findById(data.productId)
// if (!checkProduct) return res.send("no product data found")
// let savedData = await orderModel.create(data)
//     // let updateBalance = await userDocModel.find().select({ balance: 1, _id: 0 })

// let updatedata = await orderModel.updateMany({ isFreeUser: true }, { $set: { amount: 0 } }, { new: true })
// res.send({ msg1: savedData, msg: updatedata, msg2: updatePrice })

// For paid user app and the user has sufficient balance.We deduct the balance from user 's balance and update the user. We create an order document

//}
//}




const orderData = async function(req, res) {
    let allorder = await orderModel.find().populate("userId").populate("productId")
    res.send({ msg: allorder })
}

// const updatePrice = async function(req, res) {
//     //let data = req.body
//     let order = req.headers["isfreeuser"]
//         // data.isFreeUser = order
//     if (order == "true") {
//         let updatedata = await orderModel.updateMany({ isFreeUser: true }, { $set: { amount: 0 } }, { new: true, upsert: true })
//         res.send({ msg: updatedata })
//     }
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



// const totalSalesPerAuthor = async function(req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE




// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor

module.exports.createProduct = createProduct
module.exports.createUser = createUser
module.exports.createOrder = createOrder
module.exports.orderData = orderData
    //module.exports.updatePrice = updatePrice
    // module.exports.deleteBooks = deleteBooks
    // module.exports.totalSalesPerAuthor = totalSalesPerAuthor