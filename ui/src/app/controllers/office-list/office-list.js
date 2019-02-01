(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('OfficeListController', ['$http', 'SERVER_URL', OfficeListController]);

    /**
     * @ngInject
     */
    function OfficeListController($http, SERVER_URL) {
        var vm = this;

        function init(){

            $http({
                method : "GET",
                url :  SERVER_URL + 'offices'
            }).then(function(response) {

                console.log(response);

                vm.offices = response.data;

            });

            // vm.offices = [
            //     {
            //         id: 1,
            //         location: 'Szczecin',
            //         employees: 10,
            //         avgSalary: 4000
            //     }
            // ];

        }

        init();

    }
})(angular);