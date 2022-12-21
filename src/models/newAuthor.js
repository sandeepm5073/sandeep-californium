const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    authorName: String,
    age: Number,
    address: String,
    rating: String

}, { timestamps: true });

module.exports = mongoose.model('MyAuthor', authorSchema)