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
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }


},{
    collection: 'users'
});

module.exports = mongoose.model('Users', Users);