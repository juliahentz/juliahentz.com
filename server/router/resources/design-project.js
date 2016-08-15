/**
 * Created by juliahentz on 02/02/16.
 */
var mongoose = require('mongoose');

var schema = mongoose.Schema({
    title       : String,
    description : String,
    author      : {type: String, default: 'Julia Hentz'},
    date        : {type: Date, default: Date.now},
    imgUrl      : String
});

mongoose.model('DesignProject', schema);