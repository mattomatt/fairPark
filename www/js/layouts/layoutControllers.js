/**
 * Created by mattomatt on 17/12/14.
 */

angular.module('layout')

    .controller('layout',['$scope','$location','$ionicHistory', function($scope,$location,$ionicHistory) {
        console.log('layout');
        $ionicHistory.nextViewOptions({
            disableBack: true
        });

        $scope.go = function ( path ) {
            $location.path( path );
        };
    }]);