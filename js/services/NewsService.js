app.service('NewsService', ['$http', function($http) {
    const apiKey = 'xxx'; 
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=';
    const country = 'us';
    

    this.getTopHeadlines = function() {
        return $http.get(`${apiUrl}${country}&apiKey=${apiKey}`);
    };
}]);

