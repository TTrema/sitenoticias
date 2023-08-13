app.controller('WeatherController', ['$scope', 'WeatherService', function($scope, WeatherService) {
  $scope.city = 'São Paulo'; // Initialize with the default city name
  
  $scope.getWeather = function() {
      WeatherService.getWeather($scope.city)
          .then(function(response) {
              $scope.weather = response.data;
          })
          .catch(function(error) {
              console.error('Error fetching weather data:', error);
          });
  };

  // Initial call to fetch weather data
  $scope.getWeather();
}]);