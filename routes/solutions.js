module.exports = function(app) {
  // MongoDB Schema
  var mongoose = require('mongoose');

  var answerSchema = mongoose.Schema({
    content: String
  });

  var Answer = mongoose.model('Answer', answerSchema);

  app.post('/solutions', function(req, res){
    if (!req.body) return res.sendStatus(400)

    var answer = new Answer({ content: req.body.answer });
    var answerEval;

    answer.save(function (err, answer) {
      if (err) return console.error(err);

      var functionName = "palindrome";

      var questions = [
        {
          title: "bob",
          answer: true
        },
        {
          title: "abc",
          answer: false
        },
        {
          title: "harrah",
          answer: true
        }
      ];

      questions.forEach(function (question) {
        answerEval = eval(answer.content + functionName + "('" + question.title + "')");

        if (answerEval === question.answer) {
          question.userAnswer = true;
        } else {
          question.userAnswer = false;
        }
      });

      res.send(questions);
    });
  });
};