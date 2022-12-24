const { strict } = require('assert');
const mongoose = require('mongoose');
const { object } = require('webidl-conversions');
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "UserModel"
    },
    productId: {
        type: ObjectId,
        ref: "Product"
    },
    amount: Number,
    isFreeUser: Boolean,
    date: String
}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema)