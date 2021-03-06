(function() {
    'use strict';

    angular
        .module('meioambienteApp')
        .controller('EmpresaAmbientalDialogController', EmpresaAmbientalDialogController);

    EmpresaAmbientalDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Empresa'];

    function EmpresaAmbientalDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Empresa) {
        var vm = this;

        vm.empresa = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.empresa.id !== null) {
                Empresa.update(vm.empresa, onSaveSuccess, onSaveError);
            } else {
                Empresa.save(vm.empresa, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('meioambienteApp:empresaUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
