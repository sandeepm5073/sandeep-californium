const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")

const BookController = require("../controllers/productController")
const commonMW = require("../middlewares/commonMiddlewares")
const userMW = require("../middlewares/uderMiddleware")


router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", BookController.createProduct)
router.post("/createUser", userMW.userValidation, BookController.createUser)
router.post("/createOrder", userMW.userValidation, BookController.createOrder)
router.get("/orderdata", BookController.orderData)
    //router.post("/updatePrice", BookController.updatePrice)
    //router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

module.exports = router;