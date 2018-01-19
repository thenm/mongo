var {MongoClient} = require('mongodb');
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, (err, db) => {
  if(err) return console.log('Error connecting to DB');
  var ddb = db.db("mydb");
  var customerObj = {
    name: "Nitin Maul",
    address: "Pune"
  };
  ddb.collection("Customer").insertOne(customerObj, (err, res) => {
    if(err) return console.log('Error in inserting record');
    console.log('Inserted 1 Record', res.ops);
    db.close();
  });
});
