var express = require('express'); // web framework for Node.js
var app = express(); // create our app with express
var passport = require('passport'); // authentication middleware for Node.js
var GithubStrategy = require('passport-github').Strategy; // GitHub authentication strategy for Passport

passport.use(new GithubStrategy({
    clientID: 'CLIENT_ID', // your GitHub application's client id
    clientSecret: 'CLIENT_SECRET', // your GitHub application's client secret
    callbackURL: 'http://localhost:55555/auth/github/callback'
}, function(accessToken, refreshToken, profile, done) {
    // placeholder for translating profile into our own custom user object.
    // for now we will just use the profile object returned by GitHub
    return done(null, profile);
}));

// express and passport session middleware
var session = require('express-session'); // session middleware
app.use(session({secret: 'enter custom sessions secret here'})); // session secret
app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // persistent login sessions

passport.serializeUser(function(user, done) {
    // placeholder for custom user serialization
    // null is for errors
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    // placeholder for custom user deserialization
    // null is for errors
    done(null, user);
});     

// we will call this to start the GitHub Login process
app.get('/auth/github', passport.authenticate('github'));

// Github will call this URL
app.get('/auth/github/callback',
 passport.authenticate('github', {failureRedirect: '/'}), 
 function(req, res) {
    res.redirect('/');
});

app.get('/', function(req, res) {
    var html = '<form action="/auth/github" method="get">\
        <button type="submit">GitHub Login</button>\
    </form>';

    // Check if the user is authenticated
    if (req.isAuthenticated()) {
        html += '<form action="/logout" method="get">\
            <button type="submit">Logout</button>\
        </form>';

        // Display user information for debugging
        html += '<p>Authenticated as user:</p>'
        html += '<pre>' + JSON.stringify(req.user, null, 4) + '</pre>';
    }

    res.send(html);
});


app.get('/logout', function(req, res) {
    console.log('logging out');
    req.logout(function(err) {
        if (err) {
            console.error(err);
            return next(err);
        }
        res.redirect('/');
    });
});


// Simple route middleware to ensure user is authenticated.
// use this route middleware on any resource that needs to be protected.  
// If the request is authenticated (typically via a persistent login session),
// the request will proceed.  Otherwise, the user will be redirected to the
// login page.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/');
}

app.get('/protected', ensureAuthenticated, function(req, res) { // ensureAuthenticated is middleware
    res.send('acess granted');
});

var server = app.listen(55555, function() {
    console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
