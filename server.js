var express = require('express');
var database = require('./database');

var app = express();

function initialise(){

    database.openDatabase(function(){

        server();

        router();

    });

};

initialise();

function server(){

    app.listen(3000, function(){

        console.log('Server is up and running');

    });

};

function router(){

    app.use('/', express.static('public'));
    app.use('/cms', express.static('cms'));

};