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

    app.set('views', __dirname + '/public/views');
    app.set('view engine', 'ejs');

    app.get('/', function(req, res) {
        res.render('pages/index');
    });
    app.use('/cms', express.static('cms'));

};