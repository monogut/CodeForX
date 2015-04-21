var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017/solveforx');

// MongoDB Schema
var answerSchema = mongoose.Schema({
  content: String
});

var Answer = mongoose.model('Answer', answerSchema);

app.use('/public',  express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.post('/check', function(req, res){
  if (!req.body) return res.sendStatus(400)

  var answer = new Answer({ content: req.body.answer });

  answer.save(function (err, answer) {
    if (err) return console.error(err);

    var functionName = "test";

    var answerEval = eval(answer.content + functionName + "(9)");

    if (answerEval === 9) {
      res.send("Correct");
    } else {
      res.send("Incorrect");
    }

    console.log(answer);
  });
});

var server = app.listen(process.env.PORT || 3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('CodeForX listening at http://%s:%s', host, port);
});