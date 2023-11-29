'use strict';

var test = require('tape');
var request = require('supertest');
var app = require('../server');

test('Correct users returned', function (t) { // defines one test using testing framework
    request(app)
        .get('/api/customers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
            var expected = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE'];
            t.error(err, 'No error');
            t.same(res.body, expected, 'Users as expected'); // assertion checks whether the response body matches the expected array
            t.end();
        });
});
    