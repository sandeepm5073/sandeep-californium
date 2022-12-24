const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")
const commonMW = require("../middlewares/commonMiddlewares")
const ipAddress = require("../controllers/ipController")


router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})




router.post("/createBook", BookController.createBook)








router.get("/createUser", ipAddress.demoLogger, UserController.basicCode)


router.get("/basicRoute3", commonMW.mid3, UserController.basicCode, ipAddress.demoLogger)
router.get("/basicRoute2", commonMW.mid2, UserController.basicCode, ipAddress.demoLogger)
router.get("/basicRoute1", commonMW.mid1, UserController.basicCode, ipAddress.demoLogger)
router.get("/basicRoute4", commonMW.mid4, UserController.basicCode, ipAddress.demoLogger)


//router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)



//router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)




module.exports = router;