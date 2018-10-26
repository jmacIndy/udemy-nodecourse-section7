const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {

   if (err) {
      return console.log('Unable to connect to MongoDB server');
   }

   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');

   // findOneAndUpdate
   // lookup findOneAndUpdate options
   // lookup mondodb update options
   // db.collection('Todos').findOneAndUpdate({
   //    _id: new ObjectId('5bcdbe0afef1154315f1fed9')
   // }, {
   //    $set: {
   //       completed: true
   //    }
   // }, {
   //    returnOriginal: false
   // }).then((result) => {
   //    console.log(result);
   // });

   // challenge
   db.collection('Users').findOneAndUpdate({
      _id: new ObjectId('5bcbdf1b76598b3045e773e2')
   }, {
      $set: {
         name: 'Jeff'
      },
      $inc: {
         age: 1
      }
   }, {
      returnOriginal: false
   }).then((result) => {
      console.log(result);
   });

   client.close();
});
