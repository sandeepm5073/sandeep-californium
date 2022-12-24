const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const userSchema = new mongoose.Schema({
    name: String,

    balance: {
        type: Number,
        default: 100
    },
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isFreeUser: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });


module.exports = mongoose.model('UserModel', userSchema) //users