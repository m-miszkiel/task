(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('EmployeesListController', ['$http', 'SERVER_URL', EmployeesListController]);

    /**
     * @ngInject
     */
    function EmployeesListController($http, SERVER_URL) {
        var vm = this;

        function init(){

            $http({
                method : "GET",
                url :  SERVER_URL + 'offices'
            }).then(function(response) {

                console.log(response);

                vm.employees = response.data;

            });

            // vm.employees = [
            //     {
            //         name: 'Michał Miszkiel',
            //         salary: 4000
            //     }
            // ];

        }

        init();

    }
})(angular);