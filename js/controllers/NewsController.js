app.controller('NewsController', ['$scope', 'NewsService', 'NewsJsonService', function($scope, NewsService, NewsJsonService) {
    NewsService.getTopHeadlines()
        .then(function(response) {
            $scope.articles = response.data.articles;
        })
        .catch(function(error) {
            NewsJsonService.success(function (data) {
                $scope.articles = data;
              });
            console.error(error);
        });
}]);