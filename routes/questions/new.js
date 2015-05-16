module.exports = function(app, customSchema) {
  app.post('/questions/new', function(req, res){
    if (!req.body) return res.sendStatus(400)

    var question = new customSchema.Question({ 
      question: req.body.question,
      testCases: req.body.testCases
    });

    question.save(function (err, question) {
      if (err) return console.error(err);

      res.send(question);
    });
  });
};