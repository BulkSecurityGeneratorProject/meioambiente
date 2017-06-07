(function() {
    'use strict';
    angular
        .module('meioambienteApp')
        .factory('Log', Log);

    Log.$inject = ['$resource', 'DateUtils'];

    function Log ($resource, DateUtils) {
        var resourceUrl =  'api/logs/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.data = DateUtils.convertDateTimeFromServer(data.data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
