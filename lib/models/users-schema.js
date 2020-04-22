'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const schema = mongoose.Schema({
    username: {type: 'String', unique: true, require: true},
    password: {type: 'String', require: true},
    firstName: {type: 'String' },
    lastName: {type: 'String'}

});

schema.pre('save', async function () {
    // hash the password EVERY TIME we try to create a user
    this.password = await bcrypt.hash(this.password, 10);
});




module.exports = mongoose.model('users', schema);