var app = angular.module('CodeForX', ['ngRoute', 'ui.codemirror']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "/public/templates/static-pages/index.html",
    controller: "StaticPagesCtrl" 
  })
  .when("/questions/new", {
    templateUrl: "/public/templates/questions/new.html",
    controller: "QuestionsNewCtrl"
  })
  .when("/questions/index", {
    templateUrl: "/public/templates/questions/index.html",
    controller: "QuestionsIndexCtrl"
  })
  .otherwise( { redirectTo: "/" });

  $locationProvider.html5Mode(true);
});
