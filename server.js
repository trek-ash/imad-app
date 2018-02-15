var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio', 'index.html'));
});

app.get('/portfolio/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio', 'style.css'));
});

<<<<<<< HEAD
app.get('/portfolio/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio', 'script.js'));
});

app.get('/portfolio/pic1.jpg',function(req,res){
 res.sendFile(path.join(__dirname,'portfolio','pic1.jpg'));
});
app.get('/portfolio/yash.jpg',function(req,res){
 res.sendFile(path.join(__dirname,'portfolio','yash.jpg'));
=======
app.get('/ui/c.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'c.jpg'));
>>>>>>> fbc3c34118b46e5ad082d1db52be3128edc038d1
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
