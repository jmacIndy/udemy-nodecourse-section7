const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// good id format - exists in database
//var id = '5bd264c371507b396cbeece5';

// good id format - but not found in database
//var id = '6bd264c371507b396cbeece5';

// bad id format
//var id = '5bd264c371507b396cbeece511';

// this can determine if you provided a bad id format
// if (!ObjectId.isValid(id)) {
//    console.log('ID not valid');
// };
//
// Todo.find({
//    _id: id
// }).then((todos) => {
//    console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//    _id: id
// }).then((todo) => {
//    console.log('Todo: ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//    if (!todo) {
//       return console.log('Id not found');
//    }
//
//    console.log('Todo by Id: ', todo)
// }).catch((e) => console.log(e));

// challenge: for users
// good id from database
var id = '5bcf10e18179773414e9f73e'
// good id NOT from database
//var id = '6bcf10e18179773414e9f73e'
// good id from database
//var id = '5bcf10e18179773414e9f73e11'

if (!ObjectId.isValid(id)) {
   console.log('ID not valid');
};

User.findById(id).then((user) => {
   if (!user) {
      return console.log('Id for user not found');
   }

   console.log(JSON.stringify(user, undefined, 4));
}, (e) => {
   console.log(e)
});
