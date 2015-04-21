var app = angular.module('CodeForX', ['ui.codemirror']);

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
    content: "// Welcome to General Assembly \n// Web Development Immersive 7"
  };

  $scope.answer.check = function() {

    var data = { answer: $scope.answer.content };

    $http.post('/check', data).success(function(data, status, headers, config) {
      $scope.answer.result = data;
    });
  };
});