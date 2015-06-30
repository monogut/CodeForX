module.exports = function(app, customSchema) {
  app.post('/questions/check', function(req, res){
    if (!req.body) return res.sendStatus(400)

    var question = customSchema.Question;

    var results = [];

    var result = {};

    question.findOne({ _id: req.body.question_id }, function(err, question) {
      if (err) return console.error(err);

      var functionName = question.functionName;

      for (var i = 0; i < question.testCases.length; i++){
        var answerEval = eval(req.body.answer + functionName + '("' + question.testCases[i].input + '")');

        if (answerEval == question.testCases[i].output){
          result.input = question.testCases[i].input;
          result.expectedOutput = question.testCases[i].output;
          result.actualOutput = answerEval;
          result.correct = true;

          results.push(result);
        } else {
          result.input = question.testCases[i].input;
          result.expectedOutput = question.testCases[i].output;
          result.actualOutput = answerEval;
          result.correct = false;

          results.push(result);
        }
      }

      res.send(results);
    });

  });
};
