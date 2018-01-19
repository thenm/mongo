var {MongoClient} = require('mongodb');
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, db)=> {
  if(err) return console.log('Unable to connect', err);
  var ddb = db.db("mydb");
  var query = {
    address: 'Mumbai'
  };
  var updateObj = {
    name: 'Nitin Maul',
    address: 'Pune'
  };
  ddb.collection("Customer").updateMany(query, {$set: updateObj}, (err, res) => {
    if(err) return console.log('Unable to Update', err);
    console.log('record updated');
    db.close();
  });
});
