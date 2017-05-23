'use strict';

describe('Controller Tests', function() {

    describe('Atividadeexecutadamensal Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockAtividadeexecutadamensal, MockAtividade;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockAtividadeexecutadamensal = jasmine.createSpy('MockAtividadeexecutadamensal');
            MockAtividade = jasmine.createSpy('MockAtividade');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Atividadeexecutadamensal': MockAtividadeexecutadamensal,
                'Atividade': MockAtividade
            };
            createController = function() {
                $injector.get('$controller')("AtividadeexecutadamensalAmbientalDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'meioambienteApp:atividadeexecutadamensalUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
