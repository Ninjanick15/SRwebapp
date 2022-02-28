const express = require('express'); //Set up the express module
const app = express();
const bodyParser = require('body-parser');
app.engine('pug', require('pug').__express)
app.set('views', '.')
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


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