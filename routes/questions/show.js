module.exports = function(app, customSchema) {
  app.get('/questions/:id', function(req, res){
    if (!req.body) return res.sendStatus(400)

    var question = customSchema.Question;

    question.findOne({ _id: req.params.id }, function(err, question) {
      if (err) return console.error(err);

      res.send(question);
    });
  });
};
