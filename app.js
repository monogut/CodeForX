require('newrelic');
var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/codeforx');

// MongoDB Schema
var Schema = mongoose.Schema;
var customSchema = {};

var questionSchema = Schema({
  question: String,
  testCases: [{}],
});

customSchema.Question = mongoose.model('Question', questionSchema);

var routes = require('./routes/index.js')(app, customSchema);

app.use('/public',  express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

var server = app.listen(process.env.PORT || 3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('CodeForX listening at http://%s:%s', host, port);
});