app.controller('StaticPagesCtrl', function($scope, $http){
  $scope.question = {};
  $scope.question.ios = [];
  $scope.answer = {};
  $scope.solution = {};

  $scope.editorOptions = {
    lineWrapping: true,
    lineNumbers: true,
    mode: 'javascript',
    theme: 'monokai',
    tabSize: 2,
    fontSize: 30
  };

  $http.get('questions').success(function(response){
    var question = response[0];

    $scope.answer = {
      content: "// Welcome to General Assembly \n// Web Development Immersive 7\n" + "function " + question.functionName + "() {\n\t// Your solution\n}"
    };
  });

  $scope.solution.check_answer = function() {
    console.log("checking data...");

    var data = { answer: $scope.answer.content };

    console.log(data);

    $http.post('/questions/check', data).success(function(data, status, headers, config) {

      console.log(data);
      $scope.answer.results = data;
    });
  };

  $scope.question.addIo = function(){
    var newIo = {
      input: "",
      output: ""
    };
    $scope.question.ios.push(newIo);
  };

  $scope.question.submit = function(){
    console.log($scope.question.question);

    var data = {
      question: $scope.question.question,
      functionName: $scope.question.functionName,
      testCases: $scope.question.ios
    };

    $http.post('questions/new', data).success(function(response){
      console.log(response);
    });
  };

  $http.get('')
});
