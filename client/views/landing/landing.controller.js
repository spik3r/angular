'use strict';

angular.module('ei.console')
  .controller('LandingCtrl', function ($scope, $http, SmoothScroll, $state) {
      /**
       * Request Access form model.
       */
      $scope.form = {
          type: 'Access',
          email: null,
          user: 'Label',
          setType: function (type) {
              this.type = type;
          },
          setUser: function (user) {
              this.user = user;
          },
          submit: function() {
              if (this.email) {
                  if (this.type == 'Updates') {
                      // Remove user type if form type is updates
                      delete this.user;
                  }

                  // Submit form
                  var self = this;

                  $http.post("/send", this).then(
                      function success() {
                          self.email = null;
                          self.user = 'Label';
                      },
                      function error(res) {
                          // Show errors
                          alert(res.data.detail);
                      });

              } else {
                  console.error("Cannot submit form with empty email field.");
              }
          },
          cancel: function(e) {
              if (e.keyCode == 27) {
                  $scope.accessForm.userEmail.$rollbackViewValue();
              }
          }
      };

      $scope.scrollTo = function (element) {
          SmoothScroll(element);
      };

      $scope.login = function () {
          $state.go('login');
      }
  });
