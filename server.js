var express = require('express');
var app = express();

function initialise(){

    server();

};

initialise();

function server(){

    app.listen(3000, function(){

        console.log('Server is up and running');

    });

};