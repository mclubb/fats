var express = require('express');
var express_session = require('express-session');
var body_parser = require('body-parser');
var app = express();
var port = 8088;

app.set('view engine', 'pug');

app.get('/register', function(req, res) {
    res.render('register');
})

app.get('/steps', function(req, res) {
    res.render('steps');
})

app.get('/', function(req, res) {
    res.render('index');
})

// Start the server
app.listen(port, function() {
    console.log("Application Started: \n listening on port: " + port )
});
