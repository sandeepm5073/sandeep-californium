const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const authMW = require("../middleware/authmiddleware")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)

router.get("/users/:userId", authMW.auth, userController.getUserData)
router.put("/users/:userId/posts", authMW.auth, userController.updateUser)
router.delete("/users/:userId", authMW.auth, userController.deleteUser)
router.post("/users/:userId/posts", authMW.auth, userController.postMessage)



module.exports = router;