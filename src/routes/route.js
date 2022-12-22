const { application } = require('express');
const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const MyBookController = require("../controllers/myBookController")
const commonMiddle = require('../middleware/authMiddleware')

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})



router.get("/basicCode", commonMiddle.mid, commonMiddle.mid1, commonMiddle.mid2, commonMiddle.mid4, authorController.basicCode)

//router.post("/createBook", bookController.createBook)

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)



router.post("/createAuthor", MyBookController.createAuthor)
router.post("/createPublisher", MyBookController.createPublisher)
router.post("/createBook", MyBookController.createBook)
router.get("/allBookDetailes", MyBookController.getBooksWithDetailes)
router.put("/findId", MyBookController.findId)
router.get("/increase", MyBookController.increase)

module.exports = router;