var express = require('express');

var app = express();

function initialise(){

    server();

    router();

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