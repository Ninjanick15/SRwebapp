const express = require('express'); //Set up the express module
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path')
app.engine('pug', require('pug').__express)
app.set('views', '.')
app.set('view engine', 'pug')
var fs = require("fs");

//sends to index.html when visiting our link
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

//we need one of these for each html page we have. 
router.get('/dash', function (req, res) { // set this to be the same as your href <a> tag in the nav menu 
    res.sendFile(path.join(__dirname, '/dashboard.html')); // the registration page
});
app.use('/dash', router); //same as top

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