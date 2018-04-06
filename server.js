var express = require('express');
var morgan = require('morgan');
var path = require('path');
var mongo = require('mongodb');
var bodyParser=require('body-parser');

var app = express();
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio', 'index.html'));
});

app.get('/portfolio/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio', 'style.css'));
});

app.get('/portfolio/script.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'portfolio', 'script.js'));
});

app.get('/portfolio/pic1.jpg',function(req,res){
 res.sendFile(path.join(__dirname,'portfolio','pic1.jpg'));
});
app.get('/portfolio/yash.jpg',function(req,res){
 res.sendFile(path.join(__dirname,'portfolio','yash.jpg'));
});
app.get('/data.js',(req,res)=>{
res.sendFile(path.join(__dirname,'data.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var url="mongodb://yash:shwetasingh@ds137019.mlab.com:37019/knowyash";
/*app.post("/", function (req, res) {
    console.log(req.body.re.name);
    name=req.body.re.name;
    remark=req.body.re.remark;
    res.sendFile(path.join(__dirname, 'portfolio', 'index.html'));
 	
});*/
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
