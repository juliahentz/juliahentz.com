var express = require('express');
var bodyParser = require('body-parser');
var router = require('./site-router');

var app = express();
var port = process.env.PORT || 3000;

exports.start = function(){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    app.use(express.static('../site'));
    app.use('/cms', express.static('cms'));

    app.engine('ejs', require('ejs').renderFile);
    app.set('view engine', 'ejs');

    app.listen(port, function(){

        console.log('Server is up and running');

        router(app);

    });

};