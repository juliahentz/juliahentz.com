var express = require('express');
var bodyParser = require('body-parser')
var database = require('./database');

var app = express();
var port = 3000;

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

    app.use(express.static(__dirname + '/public'));
    app.use('/cms', express.static('cms'));

    app.set('views', __dirname + '/public/views');
    app.engine('ejs', require('ejs').renderFile);
    app.set('view engine', 'ejs');

    app.get('/', function(req, res) {
        res.render('pages/home/index');
    });
    app.get('/design', function(req,res){
        res.render('pages/design/design');
    });
    app.get('/development', function(req,res){
        res.render('pages/development/development');
    });
    app.get('/about', function(req,res){
        res.render('pages/about/about');
    });
    app.get('/contact', function(req,res){
        res.render('pages/contact/contact');
    });

};