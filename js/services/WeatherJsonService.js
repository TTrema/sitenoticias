app.factory('WeatherJsonService', ['$http', function ($http) {
  return $http.get('data/weather.json')
    .success(function (data) {
      return data;
    })
    .error(function (data) {
      return data;
    });
}]);