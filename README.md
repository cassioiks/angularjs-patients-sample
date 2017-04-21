# Hospital Patients App

## How to run

1) Install dependencies:

``` npm install ```

This will install all NPM dependencies as well as all required Bower packages.

2) Run gulp to start webserver and open a browser page

``` gulp ```

## Summary of activities

Besides the main page, 3 components were developed to display the data, as well as 3 core services for fetching the data from the model.

A sorter was added to the main patients display table, helping visually identify patients with bad activity levels.

### Components

1) Patients list
Initial screen showing information on all patients, with sorter.

2) Patient details
Upon clicking on a patient in the table, the app navigates to a details page displaying more information about the required patient.
The navigation is done via routes.

3) Activity level
This component is rather small visually, but is the one with most code in the controller, for it aggregates all the activity data from the patient, and determines if the activity level is good or bad.
It is determined that a number of 150 minutes of total activity is required for a good level of activity, with vigorous activity minutes counting as 2 times the minute value.

### Services

1) Patients
Service for returning personal information on all patients.

2) Patient Summary
Parametrized service for fetching the summary of activities for each patient.

3) Activities
Service for fetching the various possible activities and their intensity categorization.