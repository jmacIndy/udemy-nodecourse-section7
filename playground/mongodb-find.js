const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {

   if (err) {
      return console.log('Unable to connect to MongoDB server');
   }

   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');

   // just use find() if you don't want to filter
   // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
   //    console.log('Todos:');
   //    console.log(JSON.stringify(docs, undefined, 4));
   // }, (err) => {
   //    console.log('Unable to fetch Todos', err);
   // });

   // to find by object id
   // db.collection('Todos').find({
   //    _id: new ObjectId('5bcc86cefef1154315f1e132')
   // }).toArray().then((docs) => {
   //    console.log('Todos:');
   //    console.log(JSON.stringify(docs, undefined, 4));
   // }, (err) => {
   //    console.log('Unable to fetch Todos', err);
   //
   // });

   // to obtain count of documents
   // db.collection('Todos').find().count().then((count) => {
   //    console.log('Todos count', count);
   // }, (err) => {
   //    console.log('Unable to fetch Todos', err);
   // });

   // challenge: pull out only users with name Jeff
   db.collection('Users').find({name: 'Jeff'}).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 4));
   }, (err) => {
      console.log('Unable to fetch Users');
   });

   client.close();
});
