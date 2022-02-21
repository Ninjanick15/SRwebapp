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

router.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

router.get('/', function(req, res){ 
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

let server = app.listen(8080, function(){
});
