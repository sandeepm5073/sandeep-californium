const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const UserModel = require("../models/userModel.js");
const UserController = require("../controllers/userController");
const BookSchema = require("../models/book")
const { get } = require('underscore');
const router = express.Router();

router.get('/test-me', function(req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha', 'Akash', 'Pritesh'])
    console.log('The first element received from underscope function is ' + firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function(req, res) {

    res.send('Hello there!')
});

router.get('/candidates', function(req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is ' + state)
    console.log('Gender is ' + gender)
    console.log('District is ' + district)
    let candidates = ['Akash', 'Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    console.log('Candidates name is ' + req.params.canidatesName)
    res.send('Done')
})
router.post('/router1', UserController.createUser)

router.get('/data', UserController.getUserdata)

router.post('/create-book', UserController.createBook)

router.get('/book-data', UserController.getBookdata)

// router.get('/read', function(req, res) {
//     let data = req.body
//     console.log(data)
//     res.send({ msg: data })

// })

// router.get('/read1', function(req, res) {
//     let data = req.query
//     console.log(data)
//     res.send({ msg: data })

// })
module.exports = router;
// adding this comment for no reason