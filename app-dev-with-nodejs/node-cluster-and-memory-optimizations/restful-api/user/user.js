var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    name: String,
    email: String,
    password: String
}); // end userSchema

mongoose.model('User', userSchema); // register the schema

module.exports = mongoose.model('User'); // export the model