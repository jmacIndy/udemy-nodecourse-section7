const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {

   if (err) {
      return console.log('Unable to connect to MongoDB server');
   }

   console.log('Connected to MongoDB server');
   const db = client.db('TodoApp');

   //deleteMany
   // db.collection('Todos').deleteMany({text: 'lunch'}).then((result) => {
   //    console.log(result);
   // });

   //deleteOne
   // db.collection('Todos').deleteOne({text: 'lunch'}).then((result) => {
   //    console.log(result);
   // });

   //findOneAndDelete
   // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
   //    console.log(result);
   // });

   // challenge - part 1
   // db.collection('Users').deleteMany({name: 'Jeff'}).then((result) => {
   //    console.log(result);
   // });

   // challenge - part 2
   db.collection('Users').findOneAndDelete({
      _id: new ObjectId('5bcc82592dccec307d1b1d04')
   }).then((result) => {
      console.log(result);
   });

   client.close();
});
