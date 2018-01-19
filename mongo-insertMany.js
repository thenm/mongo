var {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, (err, db) => {
  // if(err) return console.log('Unable to connect with DB');
  var ddb = db.db("mydb");
  var myobj = [
    {name: 'Virat Kohli', address: 'Mumbai' },
    {name: 'Bhuvan Bham', address: 'Delhi'},
    {name: 'Shweta Nankani', address: 'Pune'}
  ];
  ddb.collection("Customer").insertMany(myobj, (err, res) => {
    if(err) return console.log('Unable to insert record', err);
    console.log(`Insert ${res.insertedCount} records` );
    console.log(res.ops);
    db.close();
  });
});
