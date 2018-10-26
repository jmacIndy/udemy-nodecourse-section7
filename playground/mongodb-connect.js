// const MongoClient = require('mongodb').MongoClient;
// this statement identifical to line above
// const {MongoClient} = require('mongodb');

const {MongoClient, ObjectId} = require('mongodb');

// example of creating an object ID of our own,
// we could pass this into the insert method
// var obj = new ObjectId();
// console.log(obj);

// example of ES6 object destructuring
// var user = {name: 'Jeff', age: 53};
// var {name} = user;
// console.log(name);   // prints Jeff

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {

   if (err) {
      return console.log('Unable to connect to MongoDB server');
   }

   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');

   // db.collection('Todos').insertOne({
   //    text: 'Something to do',
   //    completed: false
   // }, (err, result) => {
   //    if (err) {
   //       return console.log('Unable to insert todo', err);
   //    }
   //
   //    console.log(JSON.stringify(result.ops, undefined, 4));
   // });

   // db.collection('Users').insertOne({
   //    name: 'Jeff',
   //    age: 53,
   //    location: 'Mooresville'
   // }, (err, result) => {
   //    if (err) {
   //       return console.log('Unable to insert user', err);
   //    }
   //
   //    console.log(result.ops[0]._id.getTimestamp());
   // });

   client.close();
});
