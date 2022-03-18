const express = require('express'); //Set up the express module
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path')
app.engine('pug', require('pug').__express)
app.set('views', '.')
app.set('view engine', 'pug')
var fs = require("fs");

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//sends to index.html when visiting our link
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

//we need one of these for each html page we have. 
router.get('/reg', function (req, res) { // set this to be the same as your href <a> tag in the nav menu 
    res.sendFile(path.join(__dirname, '/reg.html')); // the registration page
});
app.use('/reg', router); //same as top

router.get('/geninfo', function (req, res) {
    res.sendFile(path.join(__dirname, '/geninfo.html')); // the general information page
});
app.use('/geninfo', router);

router.get('/speakers', function (req, res) {
    res.sendFile(path.join(__dirname, '/speakers.html')); // the speakers page
});
app.use('/speakers', router);

router.get('/account', function (req, res) {
    res.sendFile(path.join(__dirname, '/account.html')); // the account page
});
app.use('/account', router);

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/login.html')); // the admin page
});
app.use('/login', router);

router.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname, '/admin.html')); // the admin page
});
app.use('/admin', router);

router.get('/search', function (req, res) {
    res.sendFile(path.join(__dirname, '/search.html')); // the admin page
});
app.use('/search', router);

router.get('/delete', function (req, res) {
    res.sendFile(path.join(__dirname, '/delete.html')); // the admin page
});
app.use('/delete', router);

router.get('/update', function (req, res) {
    res.sendFile(path.join(__dirname, '/update.html')); // the admin page
});
app.use('/update', router);


app.get('/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, '/style.css')); //link the css
});

var img = require('path').join(__dirname, '/assets');
app.use(express.static(img)); //link to images and other assets. 

//remoteSQL database connection
var mysql = require('mysql');

var con = mysql.createPool({ // .createPool if we want the connection to stay open(pool), .createConnection closes after a amount of time (normal)
    host: "remotemysql.com", //do not change these four lines. login details for our DB
    user: "IlrItX2rk6",
    password: "0qev7AlyWm",
    database: "IlrItX2rk6"
});

con.getConnection(function (err) { // .getConnection for pool connection, .connect for normal connection.
    if (err) {
        console.log(err)
        return
    }
    console.log("Connected to database!");
});