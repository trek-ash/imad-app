var express = require('express');
var rema=require('./portfolio/he.js');
var morgan = require('morgan');
var path = require('path');
var mongo = require('mongodb');
var bodyParser=require('body-parser');
var jsdom=require('jsdom');
var { JSDOM } =jsdom;

var app = express();
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio', 'index.html'));
});
app.get('/portfolio/img/procio.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio','proico.png'));
});
app.get('/portfolio/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio', 'style.css'));
});

app.get('/portfolio/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio', 'script.js'));
});

app.get('/portfolio/he.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio', 'he.js'));
});

app.get('/portfolio/pic1.jpg',function(req,res){
 res.sendFile(path.join(__dirname,'portfolio','pic1.jpg'));
});
app.get('/portfolio/yash.png',function(req,res){
 res.sendFile(path.join(__dirname,'portfolio','yash.png'));
});
app.get('/portfolio/buzznow.png',function(req,res){
 res.sendFile(path.join(__dirname,'portfolio','buzznow.png'));
});
app.get('/portfolio/yizzy.png',function(req,res){
 res.sendFile(path.join(__dirname,'portfolio','yizzy.png'));
});
app.get('/portfolio/pnwsassessment.png',function(req,res){
 res.sendFile(path.join(__dirname,'portfolio','pnwsassessment.png'));
});
app.get('/data.js',(req,res)=>{
res.sendFile(path.join(__dirname,'data.js'));
});

var url="mongodb://yash:shwetasingh@ds137019.mlab.com:37019/knowyash";

mongo.connect(url, function(err, db) {
	if (err) throw err;
	var dbo=db.db("knowyash");
	//var saveObject = {};

	app.post('/', function(req, res) {
		//var query = req.params.query;
		var obj={
			Name:req.body.re.name,
			Remark:req.body.re.remark
				};
	
		

	dbo.collection("Remarks").save(obj, function(err) {
			if (err) throw err;
		})
	var str="Your Remark has been submitted.Thank You";
	res.sendFile(path.join(__dirname, 'portfolio', 'index.html'));

	})

	app.get('/find/:query', function(req, res) {
		var query = req.params.query;

		collectionName.find({'request': query}).toArray(function (err, result) {
			if (err) throw err;

			res.send(result);
		})

	})

})



var port = process.env.PORT || 3003;
app.listen(port, function () {
  console.log(`You are welcome on port: ${port}!`);
});
