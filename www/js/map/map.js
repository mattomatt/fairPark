/**
 * Created by mattomatt on 17/12/14.
 */

angular.module('map')

    .controller('map',['$scope','$location', function($scope,$location) {
        console.log('map');
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 12 };
        $scope.locateMe=function(){
            console.log('map.locateMe()');
            navigator.geolocation.getCurrentPosition(function(pos) {
                $scope.map.center.latitude=pos.coords.latitude;
                $scope.map.center.longitude=pos.coords.longitude;
            }, function(error) {
                alert('Unable to get location: ' + error.message);
            });
        };

    }]);