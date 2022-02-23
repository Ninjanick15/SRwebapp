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

//display html
let server = app.listen(8080, function () {
});