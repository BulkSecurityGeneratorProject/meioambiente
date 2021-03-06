(function() {
    'use strict';

    angular
        .module('meioambienteApp')
        .controller('OcorrenciainformeAmbientalDialogController', OcorrenciainformeAmbientalDialogController);

    OcorrenciainformeAmbientalDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Ocorrenciainforme', 'Ocorrencia'];

    function OcorrenciainformeAmbientalDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Ocorrenciainforme, Ocorrencia) {
        var vm = this;

        vm.ocorrenciainforme = entity;
        vm.clear = clear;
        vm.save = save;
        vm.ocorrencias = Ocorrencia.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.ocorrenciainforme.id !== null) {
                Ocorrenciainforme.update(vm.ocorrenciainforme, onSaveSuccess, onSaveError);
            } else {
                Ocorrenciainforme.save(vm.ocorrenciainforme, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('meioambienteApp:ocorrenciainformeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
