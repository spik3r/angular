'use strict';

angular.module('eiFrontend')
    .controller('DashboardCtrl', function (Sidenav, $window, $timeout, Tableau, Redshift) {
        // Get access to sidenav object and show it
        Sidenav.activate();
        console.log("Sidenav", Sidenav.isActive());

        this.gender = {
            female: {
                percentage: 50
            },
            male: {
                percentage: 50
            }
        };

        this.age = {
            age13_17: {
                percentage: 20
            },
            age18_24: {
                percentage: 25
            },
            age25_35: {
                percentage: 30
            },
            age35_45: {
                percentage: 10
            },
            age46_55: {
                percentage: 10
            },
            age56: {
                percentage: 5
            }
        };

        window.gender = this.gender;

        // Tableau.init('sampleGraph');
    });
