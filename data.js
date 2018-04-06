var MongoClient=require('mongodb').MongoClient;
var url="mongodb://yash:shwetasingh@ds137019.mlab.com:37019/knowyash";
/*
 MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});
*/
MongoClient.connect(url,(err,db)=>{
if (err) throw err;
var dbo=db.db("knowyash");
var obj=[{Name:"Yash"},
{Name:"Killer"},
{_Name:"Adam"}
];

dbo.collection("Remarks").insertMany(obj,(err,res)=>{
	if (err) throw err;
	console.log("Data Inserted");
	db.close();
})
/*
dbo.collection("Remarks").find({}).toArray((err,res)=>{
if (err) throw err;

console.log(res[0].Name);
db.close();
});

*/
});

