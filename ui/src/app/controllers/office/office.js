(function (angular) {
    'use strict';

    angular
        .module('testApp')
        .controller('OfficeController', [OfficeController]);

    /**
     * @ngInject
     */
    function OfficeController($stateParams) {
        var vm = this;

        vm.submit = submit;
        vm.office = null;

        function init() {

            if($stateParams.id){

                $http({
                    method : "GET",
                    url :  SERVER_URL + 'office/'+$stateParams.id
                }).then(function(response) {
                    vm.office = response.data.result;
                });

            }else{

                vm.office =  {
                    id: '',
                    name: ''
                };

            }


        }

        function submit(office){

            $http({
                method : "POST",
                url :  SERVER_URL + 'office',
                data: office
            }).then(function(response) {

                alert('Saved');

            });

        }

        init();

    }
})(angular);