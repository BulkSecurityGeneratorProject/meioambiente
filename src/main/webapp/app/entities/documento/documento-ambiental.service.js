(function() {
    'use strict';
    angular
        .module('meioambienteApp')
        .factory('Documento', Documento);

    Documento.$inject = ['$resource'];

    function Documento ($resource) {
        var resourceUrl =  'api/documentos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
