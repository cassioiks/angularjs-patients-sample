var patientDetails = angular.module("patientDetails").component('patientDetails', {
    templateUrl: 'views/patient-details/patient-details.template.html',
    controller: ['$routeParams', 'Patients', 'PatientSummary', function PatientsController($routeParams, Patients, PatientSummary) {
        var self = this;
        self.patientId = $routeParams.patientId;

        Patients.query().$promise.then(function(oData){
            self.patient = oData.find(function(oPatient){
                return oPatient.id == self.patientId;
            });
            self.patient.age = parseInt((new Date() - new Date(self.patient.birthDate))*3.1709791983765E-11);
        });

        // PatientSummary.query({ patientId: self.patient.id }).$promise.then(function (oPatientSummary) {

        // });
    }]
});