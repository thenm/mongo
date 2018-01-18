var {MongoClient} = require('mongodb');
var url = 'mongodb://localhost:27017/demo-db';

MongoClient.connect(url, (err, db) => {
  if(err) return console.log('error connecting DB');
  var ddb = db.db('mydb');
  ddb.createCollection("Customer", (err, res) => {
    if(err) return console.log('error in creating collection');
    console.log('Collection Created');
    db.close();
  });
});
