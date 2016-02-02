var express = require('express');
var bodyParser = require('body-parser')
var database = require('./database');

var app = express();
var port = process.env.PORT || 3000;

function initialise(){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    database.openDatabase(function(){

        server();

        router();

    });

};

initialise();

function server(){

    app.listen(port, function(){

        console.log('Server is up and running');

    });

};

function router(){

    app.use('/', express.static(__dirname + '/public'));
    app.use('/cms', express.static('cms'));



};