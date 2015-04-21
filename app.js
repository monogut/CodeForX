var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/public',  express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.post('/check', function(req, res){
  if (!req.body) return res.sendStatus(400)

  var functionName = "test";

  var answerEval = eval(req.body.answer + functionName + "(9)");

  if (answerEval === 9) {
    res.send("Correct");
  } else {
    res.send("Incorrect");
  }
});

var server = app.listen(process.env.PORT || 3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('CodeForX listening at http://%s:%s', host, port);
});