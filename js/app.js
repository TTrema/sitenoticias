var app = angular.module('NewsApp', ['ngRoute']);
app.config(function ($routeProvider) {
  
  $routeProvider
    .when('/', {
      controller: 'NewsController',
      templateUrl: 'js/views/news.html'
      
    })
    .otherwise({
      redirectTo: '/'
    });
});