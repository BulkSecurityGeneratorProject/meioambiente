(function() {
    'use strict';

    angular
        .module('meioambienteApp')
        .controller('HistoricoAmbientalDialogController', HistoricoAmbientalDialogController);

    HistoricoAmbientalDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Historico'];

    function HistoricoAmbientalDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Historico) {
        var vm = this;

        vm.historico = entity;
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
            if (vm.historico.id !== null) {
                Historico.update(vm.historico, onSaveSuccess, onSaveError);
            } else {
                Historico.save(vm.historico, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('meioambienteApp:historicoUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
