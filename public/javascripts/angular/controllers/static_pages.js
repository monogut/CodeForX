app.controller('StaticPagesCtrl', function($scope, $http){
  $scope.test = {
    number: 1
  };

  $scope.editorOptions = {
    lineWrapping: true,
    lineNumbers: true,
    mode: 'javascript',
    theme: 'monokai',
    tabSize: 2,
    fontSize: 30
  };

  $scope.answer = {
    content: "// Welcome to General Assembly \n// Web Development Immersive 7\n" + "function palindrome(str) {\n\t// Your solution\n}"
  };

  $scope.answer.check = function() {

    var data = { answer: $scope.answer.content };

    $http.post('/solutions', data).success(function(data, status, headers, config) {
      $scope.answer.results = data;
    });
  };
});
