const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
var requestIp = require('request-ip');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(ipMiddleware = function(req, res, next) {
    var clientIp = requestIp.getClientIp(req); // on localhost > 127.0.0.1
    console.log(clientIp)
    next();
})

mongoose.connect("mongodb+srv://sandeep5073:8355066809@cluster0.vxepucj.mongodb.net/auhor-publisher-book", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});