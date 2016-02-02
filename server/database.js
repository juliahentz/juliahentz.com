var mongoose = require('mongoose');

exports.connect = function(success){

	mongoose.connect('mongodb://admin:adminPassword@ds055925.mongolab.com:55925/heroku_zznnc1xq');

	mongoose.connection.on('error', function(err){

		console.log(err);

	});

	mongoose.connection.once('open', function(){

		if(success){
			success();
		}

		console.log('Database connected');

	});

};