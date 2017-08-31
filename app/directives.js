angular.module('app.directives', [])
    .directive('navigationbar', [function () {
        return{
            controller: ['$scope', function ($scope) {
                $scope.message = "Hello";
            }],

            restrict : 'E',
            templateUrl: 'partials/navigationbar.html',
        }
    }]);