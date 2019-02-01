'use strict';

var app = angular.module('testApp',
    ['templates-main', 'ui.router', 'ngRoute', 'ngSanitize', 'ngAnimate'])

    .config(['$httpProvider', '$provide', function ($httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];

    }])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('offices', {
            url: '/',
            templateUrl: 'app/controllers/office-list/office-list.html',
            controller: 'OfficeListController',
            controllerAs: 'vm',
            data: {}
        });


        $stateProvider.state('employees', {
            url: '/employees/:id?',
            templateUrl: 'app/controllers/employees-list/employees-list.html',
            controller: 'EmployeesListController',
            controllerAs: 'vm',
            data: {}
        });

        $stateProvider.state('employee', {
            url: '/employee/:id?',
            templateUrl: 'app/controllers/employee/employee.html',
            controller: 'EmployeeController',
            controllerAs: 'vm',
            data: {}
        });


        $urlRouterProvider.otherwise('/');

    }])
    .constant('SERVER_URL', 'http://localhost:3000/');
