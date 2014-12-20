/**
 * Created by mattomatt on 17/12/14.
 */

angular.module('map')

    .controller('map', ['$scope','$ionicLoading', 'geolocation', function ($scope,$ionicLoading,geolocation) {
        console.log('map');
        $scope.map = {center: {latitude: 44.6, longitude: 11.3}, zoom: 13};
        //$scope.userPosition = {latitude: 44, longitude: 11};
        $scope.locateMe = function () {
            console.log('map.locateMe()');

            geolocation.getCurrPosition()
                .then(function(pos){
                    console.log('getLocalization:'+JSON.stringify(pos));
                    $scope.map.center.latitude = pos.coords.latitude;
                    $scope.map.center.longitude = pos.coords.longitude;
                    $scope.userPosition = {latitude: pos.coords.latitude, longitude: pos.coords.longitude};
                    $ionicLoading.hide();
                });
            $ionicLoading.show({
                template: 'Retrieving position...'
            });
        };

    }]);