app.controller('QuestionsIndexCtrl', function($scope, $http){
  $http.get('questions').success(function(response){
    $scope.questions = response;
  });
});
