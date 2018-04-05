var MongoClient=require('mongodb').MongoClient;
var url="mongodb://yash:shwetasingh@123@ds137019.mlab.com:37019/knowyash";

MongoClient.connect(url,(err,db)=>{
if (err) throw err;
var dbo=db.db("mydb");
var obj=[{Name:"Yash"},
{Name:"Killer"},
{_id:2,Name:"Adam"}
];

dbo.collection("Remarks").insertMany(obj,(err,res)=>{
	if (err) throw err;
	console.log("Data Inserted");
	db.close();
})

/*dbo.collection("Remarks").find({}).toArray((err,res)=>{
if (err) throw err;

console.log(res[0].Name);
db.close();
});
*/

});


