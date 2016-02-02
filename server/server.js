var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');

var app = express();
var port = process.env.PORT || 3000;

exports.start = function(){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());

    app.use(express.static(__dirname + '../../public'));
    app.use('/cms', express.static('cms'));

    app.set('views', __dirname + '../../public/views');
    app.engine('ejs', require('ejs').renderFile);
    app.set('view engine', 'ejs');

    app.listen(port, function(){

        console.log('Server is up and running');

        router(app);

    });

};