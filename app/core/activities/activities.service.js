angular.
  module('core.activities').
  factory('Activities', ['$resource',
    function($resource) {
      return $resource('model/definitions/activities.json', {}, {});
    }
  ]);