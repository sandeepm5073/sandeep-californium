const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const MyBookController = require("../controllers/myBookController")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})



router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)



router.post("/createAuthor", MyBookController.createAuthor)
router.post("/createPublisher", MyBookController.createPublisher)
router.post("/createBook", MyBookController.createBook)

module.exports = router;