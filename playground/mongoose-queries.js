const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

var id = '599f75a41f6bc3f84744f933';
var userId = '599f47bbe608142425a1ca3e'

if (!ObjectID.isValid(id)) {
  console.log('ID not valid')
};

if (!ObjectID.isValid(userId)) {
  console.log('ID not valid')
}
// Todo.find({
//     _id: id
//   })
//   .then((todos) => {
//     console.log('Todos', todos);
//   });

// Todo.findOne({
//     _id: id
//   })
//     .then((todo) => {
//       console.log('Todo', todo)
//   });

  Todo.findById(id)
    .then((todo) => {
      if (!todo) {
        return console.log('ID not Found')
      }
      console.log('Todo by ID', todo)
    })
      .catch((e) => console.log(e));

 User.findById(userId)
  .then((user) => {
    if ( !user) {
      return console.log('ID not Found')
    }
    console.log( 'User by ID', user)
  })
    .catch((e) => console.log(e));