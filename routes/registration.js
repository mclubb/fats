var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/', function(req, res) {
    res.render('register');
});

router.post('/', function(req, res) {
    user.create(req.body.firstname, req.body.lastname, req.body.username, req.body.password, req.body.age, req.body.height, req.body.weight, function(err, userId) {
        res.send("Thank you for registering. This is user " + userId);
    })
});

module.exports = router;