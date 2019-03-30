var express = require('express');
var router = express.Router();
var registrationController = require('../controllers/registration');

router.get('/', function(req, res) {
    res.render('register');
});

router.post('/', function(req, res) {
    // Validate form

    // Create user
    registrationController.create(req, res, function(err, result) {
        if(err) {
            console.log(err);
            return res.send("Sorry, there was a problem signing you up. Please try again later");
        }
        return res.send(result);
    });
});

module.exports = router;