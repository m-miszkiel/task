(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('OfficeListController', ['$http', 'SERVER_URL', '$location', OfficeListController]);

    /**
     * @ngInject
     */
    function OfficeListController($http, SERVER_URL, $location) {
        var vm = this;

        vm.show = show;
        vm.edit = edit;
        vm.add = add;
        vm.offices = [];

        function init(){

            $http({
                method : "GET",
                url :  SERVER_URL + 'offices'
            }).then(function(response) {
                vm.offices = response.data.response;
            });

        }

        function show(id){
            $location.path('employees/'+id);
        }

        function edit(id){
            $location.path('office/'+id);
        }

        function add(){
            $location.path('office/');
        }

        init();

    }
})(angular);