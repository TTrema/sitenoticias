app.factory('NewsJsonService', ['$http', function ($http) {
  return $http.get('data/news.json')
    .success(function (data) {
      return data;
    })
    .error(function (data) {
      return data;
    });
}]);