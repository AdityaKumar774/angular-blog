angular.module('app.controllers', [
    'app.directives'
])
    .controller('PostController', ['$scope', '$http', function ($scope, $http){
        $http.get('data/posts.json').then(function (data) {
            $scope.posts = data.data;
        });
    }])
    .controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
        $http.get('data/posts.json').then(function (data){
            $scope.post = data[$routeParams.id];
        });
    }]);