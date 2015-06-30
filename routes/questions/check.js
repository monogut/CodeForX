module.exports = function(app, customSchema) {
  app.post('/questions/check', function(req, res){
    if (!req.body) return res.sendStatus(400)

    var answer = eval(req.body);

    var data = {
      results: {
        
      }
    };

    res.send();
  });
};
