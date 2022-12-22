const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const { Schema } = mongoose;
mongoose.set('debug', true);


const bookSchema = new mongoose.Schema({
    name: String,
    author: {
        type: ObjectId,
        ref: "MyAuthor",
        required: true
    },
    price: Number,
    rating: Number,
    publisher: {
        type: ObjectId,
        ref: "MyPublisher",
        required: true
    },
    isHardCover: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('MyBook', bookSchema) //users