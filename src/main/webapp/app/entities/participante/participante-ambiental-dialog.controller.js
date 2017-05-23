(function() {
    'use strict';

    angular
        .module('meioambienteApp')
        .controller('ParticipanteAmbientalDialogController', ParticipanteAmbientalDialogController);

    ParticipanteAmbientalDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Participante'];

    function ParticipanteAmbientalDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Participante) {
        var vm = this;

        vm.participante = entity;
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
            if (vm.participante.id !== null) {
                Participante.update(vm.participante, onSaveSuccess, onSaveError);
            } else {
                Participante.save(vm.participante, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('meioambienteApp:participanteUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
