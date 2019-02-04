(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('EmployeesListController', ['$http', 'SERVER_URL', '$stateParams', '$location', EmployeesListController]);

    /**
     * @ngInject
     */
    function EmployeesListController($http, SERVER_URL, $stateParams, $location) {
        var vm = this;

        vm.edit = edit;
        vm.add = add;

        function init(){

            let uri = '';
            if($stateParams.officeId){
                uri = 'employees/'+$stateParams.officeId;
            }

            $http({
                method : "GET",
                url :  SERVER_URL + uri
            }).then(function(response) {
                vm.employees = response.data.result;
            });

        }

        function edit(id){
            $location.path('employee/'+id);
        }

        function add(){
            $location.path('office-add-employee/'+$stateParams.officeId);
        }

        init();

    }
})(angular);