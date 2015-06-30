app.controller('QuestionsNewCtrl', function($scope, $http){
  $scope.question = {};
  $scope.question.ios = [];

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
});
