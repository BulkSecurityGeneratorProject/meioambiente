'use strict';

describe('Controller Tests', function() {

    describe('Trecho Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockTrecho, MockRodovia, MockSupre;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockTrecho = jasmine.createSpy('MockTrecho');
            MockRodovia = jasmine.createSpy('MockRodovia');
            MockSupre = jasmine.createSpy('MockSupre');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Trecho': MockTrecho,
                'Rodovia': MockRodovia,
                'Supre': MockSupre
            };
            createController = function() {
                $injector.get('$controller')("TrechoAmbientalDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'meioambienteApp:trechoUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
