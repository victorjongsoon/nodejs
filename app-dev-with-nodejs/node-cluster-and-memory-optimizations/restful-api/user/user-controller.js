var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./user');

// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        })
        .then(function (user) {
            res.status(200).send(user);
        })
        .catch(function (err) {
            res.status(500).send("There was a problem adding the information to the database.");
        });
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) { // http:.//localhost:3000/users
    User.find({})
        .then(function (users) {
            res.status(200).send(users);
        })
        .catch(function (err) {
            res.status(500).send("There was a problem finding the users.");
        });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id)
        .then(function (user) {
            if (!user) {
                res.status(404).send("No user found.");
            } else {
                res.status(200).send(user);
            }
        })
        .catch(function (err) {
            res.status(500).send("There was a problem finding the user.");
        });
}); 

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', async function (req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            res.status(404).send("No user found.");
        } else {
            res.status(200).send(user);
        }
    } catch (err) {
        res.status(500).send("There was a problem updating the user.");
    }
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    User.findOneAndDelete({ _id: req.params.id })
        .then(function (user) {
            if (!user) {
                res.status(404).send("No user found.");
            } else {
                res.status(200).send("User " + user.name + " was deleted.");
            }
        })
        .catch(function (err) {
            res.status(500).send("There was a problem deleting the user.");
        });
});

module.exports = router;

