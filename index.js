const express = require('express'); //Set up the express module
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path')
app.engine('pug', require('pug').__express)
app.set('views', '.')
app.set('view engine', 'pug')
var fs = require("fs");

//remoteSQL database connection
var mysql = require('mysql');

var con = mysql.createPool({ // .createPool if we want the connection to stay open(pool), .createConnection closes after a amount of time (normal)
    host: "remotemysql.com", //do not change these four lines. login details for our DB
    user: "gljo4uxrniy6",
    password: "Wildcats1863",
    database: "gljo4uxrniy6"
});

con.getConnection(function (err) { // .getConnection for pool connection, .connect for normal connection.
    if (err) {
        console.log(err)
        return
    }
    console.log("Connected to database!");
});
con.getConnection(function (err) { // .getConnection for pool connection, .connect for normal connection.
    if (err) {
        console.log(err)
        return
    }
    console.log("Connected to database!");
});

app.post('/update', function (req, res) {

    var date = req.body.date;
    var env = req.body.env;
    var leaves = req.body.leaves;
    var height = req.body.height;

    var sql = "UPDATE Growth SET datetime = ? num_of_leaves = ? height = ? WHERE env_id = ? ";
    con.query(sql, [req.body.date, req.body.env, req.body.leaves, req.body.height], function (err, result, fields) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
    res.send('<h3>Session Updated!</h3><br> <button type="button"><a href="/update">Back</a></button>');
});