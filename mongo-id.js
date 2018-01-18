var {MongoClient} = require('mongodb');
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, (err, db) => {
  // if(err) return console.log('Unable to connect with DB');
  var ddb = db.db("mydb");
  var myobj = [
    {_id: 114, name: 'Virat Kohli', address: 'Mumbai' },
    {_id: 115, name: 'Bhuvan Bham', address: 'Delhi'},
    {_id: 116, name: 'Shweta Nankani', address: 'Pune'}
  ];
  ddb.collection("Customer").insertMany(myobj, (err, res) => {
    if(err) return console.log('Unable to insert record', err);
    console.log(`Insert` );
    console.log(res);
    db.close();
  });
});
