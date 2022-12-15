const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String, // String is shorthand for {type: String}
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    },
    // isIndian: Boolean,
    // familyInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [String]

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users