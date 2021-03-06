(function() {
    'use strict';

    angular
        .module('meioambienteApp')
        .controller('ObraatividadeAmbientalDetailController', ObraatividadeAmbientalDetailController);

    ObraatividadeAmbientalDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Obraatividade', 'Atividade'];

    function ObraatividadeAmbientalDetailController($scope, $rootScope, $stateParams, previousState, entity, Obraatividade, Atividade) {
        var vm = this;

        vm.obraatividade = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('meioambienteApp:obraatividadeUpdate', function(event, result) {
            vm.obraatividade = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
