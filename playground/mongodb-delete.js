const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Undable to connect to MongoDB Server');
  } 
    console.log('Connected to MongoDB Server'); 

  // //delete many
  // db.collection('Todos').deleteMany({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'})
  // .then((result) => {
  //   console.log(result);
  // });
  // findeOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false})
    .then((result) => {
      console.log(result);
    });

  // db.close();
});