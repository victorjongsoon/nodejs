'use strict'; // ensures that the interpretation of code are as per javascript standard

var seneca = require('seneca')();
var Promise = require('bluebird');
var Entity = require('seneca-entity');

seneca.use(Entity);

var entity = seneca.make('laptop', 'name', {country: 'India'}); // create an entity

// Promisify the .save$() method
var save$ = Promise.promisify(entity.save$, {context: entity});

save$().then(console.log).catch(console.error);


