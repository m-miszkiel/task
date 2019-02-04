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

        vm.show = show;
        vm.edit = edit;

        function init(){

            $http({
                method : "GET",
                url :  SERVER_URL + 'offices'
            }).then(function(response) {
                vm.offices = response.data.result;
            });

        }

        function show(office){

            $state.go('employees', {
                officeId: office.id
            });

        }

        function edit(office){

            $state.go('office', {
                id: office.id
            });

        }

        init();

    }
})(angular);