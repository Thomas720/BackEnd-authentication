'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    username: {type: 'String', unique: true, require: true},
    password: {type: 'String', require: true},
    firstName: {type: 'String' },
    lastName: {type: 'String'}

});



module.exports = mongoose.model('users', schema);