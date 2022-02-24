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

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

//we need one of these for each html page we have. 
router.get('/reg', function(req, res){ // set this to be the same as your href <a> tag in the nav menu 
  res.sendFile(path.join(__dirname, '/reg.html')); // the registration page
});
app.use('/reg', router); //same as top

app.get('/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, '/style.css')); //link the css
});

var img = require('path').join(__dirname, '/assets');
app.use(express.static(img)); //link to images and other assets.

var con = mysql.createPool({ // .createPool if we want the connection to stay open(pool), .createConnection closes after a amount of time (normal)
    host: "remotemysql.com", //do not change these four lines. login details for our DB
    user: "mpelXDDRJY",
    password: "puWFde9TWU",
    database: "mpelXDDRJY"
});

con.getConnection(function (err) { // .getConnection for pool connection, .connect for normal connection.
    if (err) {
        console.log(err)
        return
    }
    console.log("Connected to database!");
});

app.post('/create_session', function (req, res) {

    var datetime = req.body.datetime;
    var env_id = req.body.env_id;
    var numofleaves = req.body.numofleaves;
    var height = req.body.height;

    var sql = "INSERT INTO Organizer (datetime, env_id, num_of_leaves, height) VALUES ('" + req.body.datetime + "','" + req.body.env_id + "','" + req.body.numofleaves + "','" + req.body.height + "')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.end();
    });
    res.send('<h3>Session Created!</h3><br> <button type="button"><a href="/admin">Back</a></button>');
});

//display html
let server = app.listen(8080, function () {
});