var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.post('/register', function (req, res) {
    var user = req.body;
    var newUser = new User.model({
        email: user.email,
        password: user.password
    });

    newUser.save(function (err) {
        if (!err) {
            res.status(200).json(newUser);
        }
        else {
            res.status(500).send();
            console.log(err);
        }

    })
});

mongoose.connect('mongodb://localhost:27017/spaWithTokenAuth', {
    user: 'rupam',
    pass: 'tiger'
});


var server = app.listen(3000, function () {
    console.log('api listening on ' + server.address().port);
});

