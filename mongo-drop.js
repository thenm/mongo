var {MongoClient} = require('mongodb');
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
  if(err) return console.log('Error connecting Db');
  var ddb = db.db("mydb");
  ddb.collection("Customer").drop((err, del) => {
    if(err) return console.log('Error deleting the collection');
    if(del) console.log('Collection Deleted')
    db.close();
  });
});
