/**
 * Created by juliahentz on 02/02/16.
 */
var server = require('./router/index');
var database = require('./setup/database');

function init(){

    database.connect(function(){

        console.log('Database is up and running')
        server.start();

    });

}

init();