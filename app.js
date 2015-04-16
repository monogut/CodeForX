var express = require('express');
var app = express();
var path = require("path");

app.use('/public',  express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res){
  // res.sendFile('test.html');
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

var server = app.listen(process.env.PORT || 3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('CodeForX listening at http://%s:%s', host, port);
});