// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb')

// var obj = new ObjectID();
// console.log(obj);
// var user = { name: 'andrew', age: 25 };
// var { name } = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Undable to connect to MongoDB Server');
  } 
    console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //     console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  //   // Insert new doc into Users (name, age, location)
  //   db.collection('Users').insertOne({
  //     name: 'Allen Sydnor',
  //     age: 28,
  //     location: 'Richmond'
  //   }, (err, result) => {
  //     if(err) {
  //       return console.log('Unable to insert todo', err);
  //     }
  //     console.log(result.ops[0]._id.getTimestamp());
  //   });
  db.close();
});