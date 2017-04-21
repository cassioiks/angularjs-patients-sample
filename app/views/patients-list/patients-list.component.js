angular.module('patientsList')
    .component('patientsList', {
        templateUrl: 'views/patients-list/patients-list.template.html',
        controller: ['Patients', function PatientsController(Patients) {
            var self = this;
            Patients.query().$promise.then(function (oData) {
                self.patients = [];
                oData.forEach(function (oPatient) {
                    oPatient.age = parseInt((new Date() - new Date(oPatient.birthDate)) * 3.1709791983765E-11);
                    self.patients.push(oPatient);
                });
            });

            self.onRowClick = function (patient) {
                window.location = "#!/patients/" + patient.id;
            };

            self.propertyName = 'age';
            self.reverse = true;

            self.sortBy = function (propertyName) {
                self.reverse = (self.propertyName === propertyName) ? !self.reverse : false;
                self.propertyName = propertyName;
            };
        }]
    });