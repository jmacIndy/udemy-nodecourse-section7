const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//    console.log(result);
// });

// Todo.findOneAndRemove()


Todo.findByIdAndRemove('5bd46172126d123fa836407f').then((todo) => {
   console.log(todo);
})
