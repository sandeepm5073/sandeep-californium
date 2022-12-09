const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const welcome1 = require('../logger/logger')
const currentDate = require('../util/helper')
const str1 = require('../validator/formatter')
const lodash = require('lodash');
//const { result } = require('underscore');

router.get('/test-me', function(req, res) {
    // console.log("email from introduction module", intro.myEmail)
    // intro.myFunction('Sabiha')
    // console.log("email from employee module", employee.myEmail)

    // const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // let result = _.first(days, 4)
    // console.log(`Result from underscore function is ${result}`)
    welcome1.myWelcome('sandeep')
    currentDate.date()
    currentDate.month()
    currentDate.batchInfo()
    str1.trim()
    str1.str2()
    str1.str3()

    const arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
    ];
    console.log(lodash.chunk(arr, 4));
    const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let newArray = lodash.tail(arr1);
    console.log(newArray);


    const one = [1, 2, 3, 4, 5];
    const two = [5, 7, 3, 9, 10];
    const three = [1, 12, 3, 14, 15];
    const four = [20, 21, 14, 15, 25];
    const five = [26, 27, 28, 10, 29]

    const both = lodash.union(one, two, three, four, five);
    console.log(both);

    const pairs = [
        ["horror", "The Shining "],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantasy", "Pans Labyrinth "]
    ]
    let obj = lodash.fromPairs(pairs);

    console.log(obj)
    res.send('any dummy text')
});


router.get('/test-you', function(req, res) {
    console.log("I am here")
    res.send("very important text")
})

router.get('/movies', function(req, res) {
    let arr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

    res.send("movies list=> " + arr)
})


module.exports = router;