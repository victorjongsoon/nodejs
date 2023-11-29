'use strict';

var express = require('express');
var app = express();
var customers = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE'];

app.get('/api/customers', function (req, res) {
  res.json(customers);
});

module.exports = app;