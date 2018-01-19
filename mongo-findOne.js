var {MongoClient} = require('mongodb');
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
  if(err) return console.log('Unable to connent', err);
  var ddb = db.db("mydb");
  ddb.collection("Customer").findOne({name: 'Bhuvan Bham'}, (err, res) => {
    if(err) return console.log('Unable to find the record', err);
    console.log(res);
    db.close();
  });
});
