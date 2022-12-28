const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const { post } = require("../routes/route");


// Q 1- Write a **POST api /users** to register a user from the user details in request body.
//  Solution =>

const createUser = async function(req, res) {
        try {
            let Data = req.body
                // if(Object.keys(Data).length !=0)
            if (Data) {
                let createuser = await userModel.create(Data)
                return res.status(201).send({ status: true, msz: createuser })
            } else
                res.status(400).send({ msz: "Bad Request" })
        } catch (error) {
            res.status(500).send({ msz: "Error", error: error.message })
            console.log("This is the error", error.message);
        }
    }
    // <<<<<<<<<----------------------------------------------------->>>>>>>>>>>>


// Q 2 - Write a ***POST api /login** to login a user that takes user details - email and password from the request body. If the credentials don't match with any user's data return a suitable error.
// On successful login, generate a JWT token and return it in response body. Example 
//  Solution =>

// const loginUser = async function (req, res) {
//   try {
//   userName = req.body.emailId
//   password = req.body.password

//   let user = await userModel.findOne({ emailId: userName, password: password })
//   if (!user)
//   return res.status(400).send({ status: false, msz: "user not found" })
//   res.send({ status: true, Data: token })
// }
// catch (error) {
//   res.status(201).send({ msz: "Error", error: error.message })
//   console.log("This is the error", error.message);
// }

// }





const loginUser = async function(req, res) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;

        let user = await userModel.findOne({ emailId: userName, password: password })
            // console.log(user);
        if (!user)
            return res.status(404).send({
                status: false,
                msz: "user not exixts"
            })

        // Create the jwt token nd sent it in response |
        let token = jwt.sign({ userId: user._id.toString() }, "sandeepmaurya")
        res.header('x-auth-token', token)
        res.status(201).send({ status: true })
    } catch (error) {
        res.status(500).send({ msz: "Error", error: error.message })
        console.log("This is the error", error.message);
    }
}

// <<<<<<<<<----------------------------------------------------->>>>>>>>>>>>


// Q 3-  Write a **GET api /users/:userId** to fetch user details. Pass the userId as path param in the url. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
// If present, check that the token is valid.
//  Solution =>

const getUserData = async function(req, res) {
    try {
        let userId = req.params.userId
        let userDetails = await userModel.findById(userId)
        if (!userDetails)
            return res.status(404).send({
                status: false,
                msz: "User not exists"
            });
        res.status(200).send({ status: true, data: userDetails })
    } catch (error) {
        res.status(500).send({ msz: "Error", error: error.message })
        console.log("This is the error", error.message);
    }
}




// <<<<<<<<<----------------------------------------------------->>>>>>>>>>>>

// Q 4 - Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
//  Solution =>

const updateUser = async function(req, res) {
    try {
        let message = req.body.message
        let userId = req.params.userId;
        let userDetails1 = await userModel.findById(userId)
        if (!userDetails1) {
            return res.status(404).send({
                satus: false,
                msz: "user not exits"
            });
        }

        let updatedPosts = userDetails1.posts
        updatedPosts.push(message);
        let updatedUser = await userModel.findOneAndUpdate({ _id: userDetails1._id }, { posts: updatedPosts }, { new: true })
        return res.status(200).send({ status: true, data: updatedUser })
    } catch (error) {
        res.status(500).send({ msz: "Error", error: error.message })
        console.log("This is the error", error.message);
    }
}



// <<<<<<<<<----------------------------------------------------->>>>>>>>>>>>


// Q 5 - Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
//  Solution => 

const deleteUser = async function(req, res) {
    try {
        let userId = req.params.userId;
        if (!userId) {
            return res.status(404).send({
                satus: false,
                msz: "Provide userId"
            });
        }
        //  let find1 = await userModel.findOne({ _id: userId})
        //  console.log(find1);
        let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
        res.status(200).send({ status: true, msz: deleteUser })

    } catch (error) {
        res.status(500).send({ msz: "Error", error: error.message })
        console.log("This is the error", error.message);
    }
}

const postMessage = async function(req, res) {
    try {
        let message = req.body.message
        let user = await userModel.findById(req.params.userId)
        if (!user) return res.status(404).send({ status: false, msz: "No such user exists" })
        let updatedPosts = user.posts
        updatedPosts.push(message)
        let updatedUsers = await userModel.findByIdAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
        return res.status(200).send({ status: true, data: updatedUsers })
    } catch (error) {
        res.status(500).send({ msz: "Error", error: error.message })
        console.log("This is the error", error.message);
    }
}


module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;