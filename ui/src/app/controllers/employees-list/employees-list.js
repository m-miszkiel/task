(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('EmployeesListController', [EmployeesListController]);

    /**
     * @ngInject
     */
    function EmployeesListController() {
        var vm = this;

        function init(){

            vm.employees = [
                {
                    name: 'Michał Miszkiel',
                    salary: 4000
                }
            ];

        }

        init();

    }
})(angular);