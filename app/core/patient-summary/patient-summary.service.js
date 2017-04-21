angular.
  module('core.patientSummary').
  factory('PatientSummary', ['$resource',
    function($resource) {
      return $resource('model/patients/:patientId/summary.json', {}, {
        query: {
          method: 'GET',
          params: {patientId: '@id'},
          isArray: true
        }
      });
    }
  ]);