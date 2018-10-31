var env = process.env.NODE_ENV || 'development';

// for the purposes of this example, we assume that Heroku
// contains the production environment and that it sets the
// NODE_ENV and PORT variables
if (env == 'development') {
   process.env.PORT = 3000;
   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env == 'test') {
   process.env.PORT = '3000'
   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
