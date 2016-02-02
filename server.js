var express = require('express');
var bodyParser = require('body-parser')
//var database = require('./database');

var app = express();
var port = process.env.PORT || 3000;

function initialise(){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    //database.openDatabase(function(){

        server();

        router();

    //});

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

    var icons = [
        { icon: 'icon-disc', name: 'home', route:'/'},
        { icon: 'icon-image', name: 'design', route:'/design'},
        { icon: 'icon-air-play', name: 'development', route:'/development'},
        { icon: 'icon-head', name: 'about', route:'/about'},
        { icon: 'icon-speech-bubble', name: 'contact', route:'/contact'}
    ];

    app.get('/', function(req, res) {
        res.render('pages/index', {
            icons:icons
        });
    });
    app.get('/design', function(req,res){
        res.render('pages/design', {
            icons:icons
        });
    });
    app.get('/development', function(req,res){
        res.render('pages/development', {
            icons:icons
        });
    });
    app.get('/about', function(req,res){
        res.render('pages/about', {
            icons:icons
        });
    });
    app.get('/contact', function(req,res){
        res.render('pages/contact', {
            icons:icons
        });
    });

};