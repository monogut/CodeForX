module.exports = function(app, customSchema) {
  app.get('/questions', function(req, res){
    if (!req.body) return res.sendStatus(400)

    var question = customSchema.Question;

    question.find({}, function(err, questions) {
      if (err) return console.error(err);

      res.send(questions);
    });
  });
};