(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('OfficeController', ['$http', '$stateParams', 'SERVER_URL', '$state', OfficeController]);

    /**
     * @ngInject
     */
    function OfficeController($http, $stateParams, SERVER_URL, $state) {
        var vm = this;

        vm.submit = submit;
        vm.office = null;
        vm.mode = null;

        function init() {

            if($stateParams.id){

                vm.mode = 'edit';

                $http({
                    method : "GET",
                    url :  SERVER_URL + 'office/'+$stateParams.id
                }).then(function(response) {
                    vm.office = response.data.result;
                });

            }else{

                vm.mode = 'add';

                vm.office =  {
                    id: '',
                    name: ''
                };

            }


        }

        function submit(office){

            if(vm.mode === 'add'){

                $http({
                    method : "POST",
                    url :  SERVER_URL + 'office',
                    data: office
                }).then(function(response) {
                    $state.go('offices');
                });

            }else {


                $http({
                    method : "PUT",
                    url :  SERVER_URL + 'office/'+office._id,
                    data: {
                        id: office.id,
                        name: office.name
                    }
                }).then(function() {
                    $state.go('offices');
                });

            }


        }

        init();

    }
})(angular);