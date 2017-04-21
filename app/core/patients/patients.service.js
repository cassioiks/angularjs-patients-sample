angular.
  module('core.patients').
  factory('Patients', ['$resource',
    function($resource) {
      return $resource('model/patients.json', {}, {});
    }
  ]);