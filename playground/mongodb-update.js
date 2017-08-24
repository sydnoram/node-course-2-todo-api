const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Undable to connect to MongoDB Server');
  } 
    console.log('Connected to MongoDB Server'); 

  db.collection('Todos').findOneAndUpdate({_id: new ObjectID("599f342fe34dfb8cd0c5cd1a")
}, {
    $set: {
      completed: true
    }
   }, {
    returnOriginal: false
   })
    .then((result) => {
      console.log(result);
    });

  // db.close();
});