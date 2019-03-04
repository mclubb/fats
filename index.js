var express = require('express');
var express_session = require('express-session');
var body_parser = require('body-parser');
var app = express();
var port = 8088;
var db = require('./db');

// Set the view engine to use pug templates
app.set('view engine', 'pug');

// parse application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: false }));

// parse application/json
app.use(body_parser.json());

// Routes Go Here
app.use('/register', require('./routes/registration'));
app.get('/steps', function(req, res) {
    res.render('steps');
})
app.get('/', function(req, res) {
    res.render('index');
})


// Starting the MySQL Connection and Webserver
db.connect('app_prod_database', function(err) {
    if(err) {
        console.log('Error connecting to database');
        process.exit(1);
    }
    app.listen(port, function() {
        console.log("Application Started: \n listening on port: " + port);
    });
})


