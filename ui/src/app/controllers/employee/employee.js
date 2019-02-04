(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('EmployeeController', ['$stateParams', '$state', '$location', '$http', 'SERVER_URL', EmployeeController]);

    /**
     * @ngInject
     */
    function EmployeeController($stateParams, $state, $location, $http, SERVER_URL) {
        var vm = this;
        vm.offices = [];
        vm.mode = null;

        vm.submit = submit;

        function transformResponse(offices){

            let selectData = [];
            for(let i = 0; i < offices.length; i++){
                selectData.push({
                    value: offices[i].office._id,
                    name: offices[i].office.name
                })
            }

            return selectData;

        }

        function init() {

            $http({
                method : "GET",
                url :  SERVER_URL + 'offices'
            }).then(function(response) {
                vm.offices = transformResponse(response.data.response);
                loadEmployee();
            });

            function loadEmployee(){

                if($stateParams.id){

                    vm.mode = 'edit';

                    $http({
                        method : "GET",
                        url :  SERVER_URL + 'employee/'+$stateParams.id
                    }).then(function(response) {
                        vm.employee = response.data.result;
                    });

                }else if($stateParams.officeId){

                    vm.mode = 'add';

                    vm.employee = {
                        name: '',
                        salary: 0.00,
                        officeId: $stateParams.officeId
                    };

                }

            }

        }

        function submit(employee){

            if(vm.mode === 'add'){

                let request = {
                    name: employee.name,
                    salary: parseFloat(employee.salary),
                    officeId: employee.officeId
                };

                $http({
                    method : "POST",
                    url :  SERVER_URL + 'employee',
                    data: request
                }).then(function(response) {
                    $location.path('employees/'+employee.officeId)
                });

            }else {

                let request = {
                    id: employee.id,
                    name: employee.name,
                    salary: parseFloat(employee.salary),
                    officeId: employee.officeId
                };

                console.log(request);

                $http({
                    method : "PUT",
                    url :  SERVER_URL + 'employee/'+employee._id,
                    data: request
                }).then(function() {
                    $location.path('employees/'+request.officeId);
                });

            }


        }

        init();

    }
})(angular);