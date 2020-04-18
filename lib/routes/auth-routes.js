'use strict';

//Esoteric Resources 
const express = require('express');

//Internal Resources
const userSchema = require('../models/users-schema.js');
const Model = require('../models/model.js');

//Variables
const UsersModel = new Model(userSchema);
console.log('users Model', UsersModel);
const router = express.Router();

//Routers

//SignUp Router
router.post('/signup-body', async (req, res, next) => {
    let user = await UsersModel.create(req.body);
    res.send(user);
});
//  router.post('/signup-headers', async (req, res, next) => {
//     let user = await UsersModel.create(req.headers.authorization);
//     res.send(user);
//  });

//SignIn Router
// router.post('/signin', (req, res, next) =>{
//     res.send('signin');
// })

// app.use(usersModel);
//Get User Router
module.exports = router;