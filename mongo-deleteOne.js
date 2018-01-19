var {MongoClient} = require('mongodb');
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
  if(err) return console.log('Unable to connect', err);
  var ddb = db.db("mydb");
  var query = {address: "Pune"};
  ddb.collection("Customer").deleteOne(query, (err, res) => {
    if(err) return console.log('Unable to delete', err);
    console.log('deleted the record', res);
    db.close();
  });
});
