const express = require('express'); //Set up the express module
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path')
app.engine('pug', require('pug').__express)
app.set('views', '.')
app.set('view engine', 'pug')
var fs = require("fs");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//remoteSQL database connection
var mysql = require('mysql');

var con = mysql.createPool({ // .createPool if we want the connection to stay open(pool), .createConnection closes after a amount of time (normal)
    host: "remotemysql.com", //do not change these four lines. login details for our DB
    user: "mpelXDDRJY",
    password: "r3KEzuSVtb",
    database: "mpelXDDRJY"
});

con.getConnection(function (err) { // .getConnection for pool connection, .connect for normal connection.
    if (err) {
        console.log(err)
        return
    }
    console.log("Connected to database!");
});

//insert data into database

app.post('/create_session', function (req, res) {

    var datetime = req.body.datetime;
    var envid = req.body.envid;
    var numofleaves = req.body.numofleaves;
    var height = req.body.height;


    var sql = "INSERT INTO Growth (datetime, env_id, num_of_leaves, height) VALUES ('" + req.body.datetime + "','" + req.body.envid + "','" + req.body.numofleaves + "','" + req.body.height + "')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.end();
    });
    res.send('<h3>Session Created!</h3><br> <button type="button"><a href="index.html">Back</a></button>');
});