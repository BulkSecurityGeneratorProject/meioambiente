'use strict';

describe('Controller Tests', function() {

    describe('Proposta Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockProposta, MockEmpresa, MockEditallote;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockProposta = jasmine.createSpy('MockProposta');
            MockEmpresa = jasmine.createSpy('MockEmpresa');
            MockEditallote = jasmine.createSpy('MockEditallote');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Proposta': MockProposta,
                'Empresa': MockEmpresa,
                'Editallote': MockEditallote
            };
            createController = function() {
                $injector.get('$controller')("PropostaAmbientalDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'meioambienteApp:propostaUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
