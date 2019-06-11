//users.route.js

const express = require('express');
const app = express();
const usersRoutes = express.Router();

let Users = require('../models/Users.js');

usersRoutes.route('/add').post(function (req, res){
    let users = new Users(req.body);
    users.save().then(users => {
        res.status(200).json({'users': 'user added successfully'});
    }).catch(err => {
        res.status(400).send("unable to send to database");
    });
});

usersRoutes.route('/').get(function(req, res){
    Users.find(function(err, users){
        if(err){
            console.log(err);
        }
        else{
            res.json(users);
        }
    });
});

usersRoutes.route('/edit/:id').get(function(req, res) {
    let id = req.params.id;
    Users.findById(id, function(err, users){
        res.json(users);
    });
});

usersRoutes.route('/update/:id').post(function(req, res){
    Users.findById(req.params.id, function(err, next, users){
        if(!users)
            return next(new Error('Could not load document'));
        else{
            users.username = req.body.username;
            users.password = req.body.password;
            users.first_name = req.body.first_name;
            users.last_name = req.body.last_name;

            users.save().then(users => {
                res.json('Update complete');
            }).catch(err => {
                res.status(400).send("Unable to update the database");
            });
        }
    });
});

usersRoutes.route('/delete/:id').get(function(req, res){
    Users.findByIdAndRemove({_id: req.params.id}, function(err, users){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = usersRoutes;