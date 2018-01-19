var {MongoClient} = require('mongodb');
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, db)=> {
  if(err) return console.log('Unable to connect', err);
  var ddb = db.db("mydb");
  var query = {
    address: 'Pune'
  };
  var updateObj = {
    name: 'Sachin Tendulkar',
    address: 'Mumbai'
  };
  ddb.collection("Customer").updateOne(query, {$set: updateObj}, (err, res) => {
    if(err) return console.log('Unable to Update', err);
    console.log('1 record updated');
    db.close();
  });
});
