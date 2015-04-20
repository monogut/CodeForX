var app = angular.module('CodeForX', ['ui.codemirror']);

app.controller('StaticPagesCtrl', function($scope){
  $scope.test = {
    number: 1
  };

  $scope.editorOptions = {
    lineWrapping: true,
    lineNumbers: true,
    mode: 'javascript',
    theme: 'monokai',
    mode: 'javascript'
  };

  $scope.answer = {};

  $scope.answer.check = function() {
    $scope.answer.result = eval($scope.answer.content);
  };
});