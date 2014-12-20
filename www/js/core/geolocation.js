angular.module('geolocation')
    .factory('geolocation', ['$q',function($q){
        var percorsoService = {};

        percorsoService.getCurrPosition=function () {
            var deferred = $q.defer();
            navigator.geolocation.getCurrentPosition(function (pos) {
                deferred.resolve(pos);
            }, function (error) {
                console.log('Unable to get location: ' + error.message);
                deferred.reject(error);
            });
            return deferred.promise;
        };
        return percorsoService;
    }]);