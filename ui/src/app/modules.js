'use strict';

var app = angular.module('testApp',
    ['templates-main', 'ui.router', 'ngRoute', 'ngSanitize', 'ngAnimate'])

    .config(['$httpProvider', '$provide', function ($httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];

    }])

    .config(['$locationProvider', function ($locationProvider) {

        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode(true);
        }

    }])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('offices', {
            url: '/',
            templateUrl: 'app/controllers/office-list/office-list.html',
            controller: 'OfficeListController',
            controllerAs: 'vm',
            data: {}
        }).state('office', {
            url: '/office/:id?',
            templateUrl: 'app/controllers/office/office.html',
            controller: 'OfficeController',
            controllerAs: 'vm',
            data: {}
        }).state('employees', {
            url: '/employees/:officeId',
            templateUrl: 'app/controllers/employees-list/employees-list.html',
            controller: 'EmployeesListController',
            controllerAs: 'vm',
            data: {}
        }).state('employee', {
            url: '/employee/:id?',
            templateUrl: 'app/controllers/employee/employee.html',
            controller: 'EmployeeController',
            controllerAs: 'vm',
            data: {}
        }).state('office-add-employee', {
            url: '/office-add-employee/:officeId?',
            templateUrl: 'app/controllers/employee/employee.html',
            controller: 'EmployeeController',
            controllerAs: 'vm',
            data: {}
        });

        $urlRouterProvider.otherwise('/');

    }])
    .constant('SERVER_URL', 'http://localhost:3000/');
