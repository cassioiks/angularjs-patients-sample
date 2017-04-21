angular.module('patientsApp')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/patients', {
                    template: '<patients-list></patients-list>'
                }).
                when('/patients/:patientId', {
                    template: '<patient-details></patient-details>'
                }).
                otherwise('/patients');
        }
    ]);