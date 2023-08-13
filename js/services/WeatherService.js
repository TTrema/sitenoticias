app.factory('WeatherService', function($http) {
    var apiKey = 'xxx';
    var baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  
    return {
        getWeather: function(city) {
            var url = baseUrl + '?q=' + city + '&lang=pt_br&units=metric&appid=' + apiKey;
            return $http.get(url);
          }
    };
  });
  