(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('OfficeListController', [OfficeListController]);

    /**
     * @ngInject
     */
    function OfficeListController() {
        var vm = this;

        function init(){

            vm.offices = [
                {
                    id: 1,
                    location: 'Szczecin',
                    employees: 10,
                    avgSalary: 4000
                }
            ];

        }

        init();

    }
})(angular);