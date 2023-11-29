var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/user-controller'); // import user controller
app.use('/users', UserController); // use user controller

module.exports = app;