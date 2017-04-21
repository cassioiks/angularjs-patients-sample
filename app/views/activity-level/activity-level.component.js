angular.module('activityLevel').component('activityLevel', {
    templateUrl: 'views/activity-level/activity-level.template.html',
    controller: ['PatientSummary', 'Activities', function ActivityLevelController(PatientSummary, Activities) {
        var self = this;
        self.totalActivityMinutes = 0;
        self.moderateActivityTime = 0;
        self.vigorousActivityTime = 0;
        self.activityLevel = "";
        Activities.query().$promise.then(function (oData) {
            self.activities = oData;
            PatientSummary.query({ patientId: self.patient.id }).$promise.then(function (oPatientSummary) {
                self.patientSummary = oPatientSummary;
                self.patientSummary.forEach(function (oElement) {
                    var activity = self.activities.find(function(oActivity){
                        return oActivity.activity === oElement.activity;
                    });
                    oElement.intensity = activity.intensity;
                    switch (activity.intensity) {
                        case "moderate":
                            self.totalActivityMinutes += oElement.minutes;
                            self.moderateActivityTime += oElement.minutes;
                            break;
                        case "vigorous":
                            self.totalActivityMinutes += oElement.minutes * 2;
                            self.vigorousActivityTime += oElement.minutes;
                            break;
                    };
                });

                if (self.totalActivityMinutes >= 150){
                    self.activityLevel = "good";
                    self.good = true;
                } else{
                    self.activityLevel = "bad";
                    self.bad = true;
                }

                self.patient.moderateActivityTime = self.moderateActivityTime;
                self.patient.vigorousActivityTime = self.vigorousActivityTime;
                self.patient.patientSummary = self.patientSummary;
                self.patient.activityLevel = self.activityLevel;
            });
        });
    }],
    bindings: {
        patient: "="
    }
});