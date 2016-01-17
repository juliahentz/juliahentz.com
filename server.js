var express = require('express');
var bodyParser = require('body-parser')
var database = require('./database');

var app = express();

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

    app.listen(3000, function(){

        console.log('Server is up and running');

    });

};

function router(){

    app.set('views', __dirname + '/public/views');
    app.engine('ejs', require('ejs').renderFile);
    app.set('view engine', 'ejs');

    app.get('/', function(req, res) {
        res.render('pages/index');
    });
    app.get('/projects', function(req,res){
        res.render('pages/projects');
    });
    app.get('/about', function(req,res){
        res.render('pages/about');
    });
    app.get('/contact', function(req,res){
        res.render('pages/contact');
    });

    app.use('/cms', express.static('cms'));

};