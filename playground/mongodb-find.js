const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Undable to connect to MongoDB Server');
  } 
    console.log('Connected to MongoDB Server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('599f19146f9fac4294133ad1')
  //  }).toArray()
  //   .then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err)
  //   });

  db.collection('Todos').find().count()
    .then((count) => {
      console.log('Todos count');
      console.log(count);
    }, (err) => {
      console.log('Unable to fetch todos', err)
    });


  // db.close();
});