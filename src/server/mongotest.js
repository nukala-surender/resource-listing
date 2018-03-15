 var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:root@ds247698.mlab.com:47698/my-db";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("my-db");
  dbo.createCollection("resource", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
      var myobj = { title: "Mongo", path: "https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp", desc:"mongo examples" };
    dbo.collection("resource").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });

    db.close();
  });
});
