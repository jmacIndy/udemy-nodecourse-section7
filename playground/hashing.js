// we won't really use this in our real application
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

var password = '123abc!';

// 10 is number of rounds; the bigger that number, the longer
// the encryption will take
// bcrypt.genSalt(10, (err, salt) => {
//    bcrypt.hash(password, salt, (err, hash) => {
//       console.log(hash);
//    });
// });

var hashedPassword = '$2a$10$21XhnrgrTUJJo/uBXz8b9eH9j3Y.gl9t8I1t0Yn13kstGJjtrmtvO';

bcrypt.compare(password, hashedPassword, (err, res) => {
   console.log(res);
});

// var data = {
//    id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var message = 'I am user #3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//    id: 4
// };
//
// var token = {
//    data,
//    hash: SHA256(JSON.stringify(data) + 'somesecretsaltstring').toString()
// }
//
// // this is how someone would try to break this; howevver, it
// // will not work because they don't know the secret salt value
// // which is only stored on the server
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// // end of how someone would try to break it
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecretsaltstring').toString();
//
// if (resultHash === token.hash) {
//    console.log('data was not changed');
// } else {
//    console.log('data was changed - do not trust it');
// }
