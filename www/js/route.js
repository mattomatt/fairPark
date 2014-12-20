/**
 * Created by mattomatt on 20/12/14.
 */
angular.module('fairPark').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider.
            state('app', {
                //url:'/app',
                abstract: true,
                templateUrl: 'js/layouts/_layout.html',
                controller: 'layout',

            }).

            state('app.map', {
                url: '/map',
                views: {
                    'menuContent': {
                        templateUrl: 'js/map/_map.html',
                        controller: 'map'
                    }
                }
            });
            $urlRouterProvider.otherwise('/map');

    }]);