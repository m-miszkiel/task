(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('EmployeeController', [EmployeeController]);

    /**
     * @ngInject
     */
    function EmployeeController() {
        var vm = this;

        function init() {

            vm.offices = [
                {
                    name: 'Szczecin',
                    value: 1
                }
            ];

            vm.employee = {
                name: 'Michał Miszkiel',
                salary: 4000,
                officeId: 1
            };

        }

        init();

    }
})(angular);