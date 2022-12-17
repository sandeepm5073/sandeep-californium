const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)
router.get("/getBooksData", BookController.getBooksData)



router.post("/createBook", BookController.createBook)
router.get("/getList", BookController.bookLists)
router.get("/inYear", BookController.getBooksInYear)
router.get("/particularBooks", BookController.getParticularBooks)
router.get("/INRbooks", BookController.getXINRBooks)
router.get("/randombooks", BookController.getRandomBooks)

module.exports = router;