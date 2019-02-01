'use strict';

var app = angular.module('testApp',
    ['templates-main', 'ui.router', 'ngRoute', 'ngSanitize', 'ngAnimate'])

    .config(['$httpProvider', '$provide', function ($httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];

    }])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/controllers/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm',
            data: {}
        });

        $urlRouterProvider.otherwise('/');

    }]);
