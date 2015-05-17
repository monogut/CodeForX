var app = angular.module('CodeForX', ['ngRoute', 'ui.codemirror']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.
    when("/",
      { templateUrl: "/public/templates/static-pages/index.html",
        controller: "StaticPagesCtrl" }).
    when("/questions",
      { templateUrl: "/public/templates/static-pages/index.html",
        controller: "StaticPagesCtrl" }).
    otherwise( { redirectTo: "/" });
    
  $locationProvider.html5Mode(true);
});