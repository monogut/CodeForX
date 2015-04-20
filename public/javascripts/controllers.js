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
    mode: 'javascript',
    tabSize: 2,
    fontSize: 30
  };

  $scope.answer = {
    content: "// Welcome to General Assembly \n// Web Development Immersive 7"
  };

  $scope.answer.check = function() {
    $scope.answer.result = eval($scope.answer.content);
  };
});