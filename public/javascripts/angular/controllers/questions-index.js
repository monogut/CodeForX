app.controller('QuestionsIndexCtrl', function($scope, $http, $location){
  $scope.questions = [];

  $http.get('questions').success(function(response){
    $scope.questions = response;

    console.log($scope.questions);
  });

  $scope.showQuestion = function(index){
    var question_id = $scope.questions[index]._id;

    $location.path('questions/' + question_id);
  };
});
