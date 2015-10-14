'use strict';

angular.module('angularSeed')
  .service('Auth',
  ['$http', '$cookies', 'Base64', '$timeout', '$window',
    function ($http, $cookies, Base64, $timeout, $window) {
      // Declare private variables
      var currentUser = {}; // Store current user
      var loggedIn = false;

      // Initialize service
      (function init() {
        // Check if user exists in cookies
        if ($cookies.user) {
          // TODO change to getters and setters in angular 1.4
          var userString = Base64.decode($cookies.user);
          var stringArray = userString.split("/");

          if (stringArray.length === 3) {
            currentUser = {
              username: stringArray[0],
              password: stringArray[1],
              role: stringArray[2]
            };

            loggedIn = true;
          } else {
            console.error("User cookie has invalid amount of parameters");
          }
        }
      }());

      // Declare private functions
      /**
       * Encode 'username:password' string into Base64 and attach to
       * the Authorisation header in the form ->
       * "Basic [authstring]"
       * */
      function addAuthHeader(username, password) {
        var authdata = Base64.encode(username + ':' + password);
        $http.defaults.headers.common['Authorisation'] = 'Basic ' + authdata;
      }

      /**
       * Remove Authorisation header from $http
       * */
      function removeAuthHeader() {
        $http.defaults.headers.common['Authorisation'] = 'Basic ';
      }

      /** Store user object in session cookie **/
      function storeSessionCookie(user) {
        // Store username and role inside cookies
        // TODO change to getters and setters in angular 1.4
        // https://docs.angularjs.org/api/ngCookies/service/$cookies
        $cookies.user = Base64.encode(user.username + '/' + user.password + '/' + user.role);
        console.log("Cookie saved: ", $cookies.user, user.password);
      }

      /** Remove user object from session cookie **/
      function removeSessionCookie() {
        // TODO change to getters and setters in angular 1.4
        delete $cookies.user;
      }


      // Declare public functions
      /**
       * Login function takes username, password and callback.
       * It performs call to the remote auth server, and stores
       * user object in cookies on success.
       *
       * Username and password string is hashed using Base64 and attached to every
       * subsequent $http call inside "Authoristaion" header
       *
       * Callback is executed on both success and error attempts, and
       * has the following signature: callback(request)
       * */
      var login = function (username, password, callback) {
        // Fake request for testing purposes, use $http here.
        $timeout(function () {
          var response = {
            success: username === 'test' && password === 'test'
          };

          if (response.success) {
            currentUser = {
              username: username,
              password: password,
              role: 'user'
            };

            storeSessionCookie(currentUser);
            addAuthHeader(username, password);

            loggedIn = true;
          }

          callback(response);
        });
      };
      /**
       * Remove session cookies with user information,
       * clean up authorisation header.
       * */
      var logout = function (callback) {
        removeAuthHeader();
        removeSessionCookie();

        loggedIn = false;

        callback();
        $window.location.href = '/login'
      };

      // Return public api
      return {
        user: currentUser,
        isLoggedIn: function () {
          return loggedIn;
        },
        login: login,
        logout: logout
      }
    }]);
