var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require("mysql");

app.use(express.static('public'));

// First you need to create a connection to the db
var con = mysql.createConnection({
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  host: "localhost",
  port: "8889",
  user: "root",
  password: "1234",
  database: "kartflip"
});

con.connect(function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log('Connection established');
});

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.post('/checklogin', function (req, res) {
  con.query("SELECT * FROM customer where username = '" + req.body.username + "' AND password = '" + req.body.password + "' ",function(err,rows){
    if(err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);

    res.send(rows);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
