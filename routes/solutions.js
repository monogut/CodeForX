module.exports = function(app) {
  // MongoDB Schema
  var mongoose = require('mongoose');
  
  var answerSchema = mongoose.Schema({
    content: String
  });

  var Answer = mongoose.model('Answer', answerSchema);

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
};