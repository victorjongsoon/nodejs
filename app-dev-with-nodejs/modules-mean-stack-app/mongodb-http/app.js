var express = require('express');
var app = express();
var port = 3000; // bind & listen to all incoming requests on port 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // use native promises to use asyncronous calls
mongoose.connect('mongodb://localhost:27017/node-demo'); // connect to our database
var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
}); // create a schema
var User = mongoose.model("User", nameSchema); // create a model based on the schema

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
}); // serve the index.html file

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
}); // add a new user to the database

app.listen(port, () => {
    console.log("Server listening on port " + port);
}); // start the server

