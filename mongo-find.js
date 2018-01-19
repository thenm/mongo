var {MongoClient} = require('mongodb');
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
  if(err) return console.log('Unable to connect', err);
  var ddb = db.db('mydb');
  ddb.collection("Customer").find({}).toArray((err, res)=> {
    if(err) return console.log('Unable to find the customer', err);
    console.log('Found records', res);
  });
});
