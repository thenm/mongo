// var MongoClient = require('mongodb').MongoClient;
// ES6 Object Destruction
var {MongoClient} = require('mongodb');
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
  if(err) return console.log('Unable to connect to the DB');
  console.log('Connnected to DB');
  db.close();
});
