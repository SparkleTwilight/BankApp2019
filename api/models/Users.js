//Users.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Users = new Schema({
 username: {
    type: String
  },
  password: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
},{
<<<<<<< HEAD
    collection: 'bankApp'
=======
    collection: 'users'
>>>>>>> dev
});

module.exports = mongoose.model('Users', Users);