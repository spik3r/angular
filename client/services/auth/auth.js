'use strict';

angular.module('eiFrontend')
    .service('Auth',
        ['$http', '$cookies', 'Base64', '$timeout', '$window',
            function ($http, $cookies, Base64, $timeout, $window, Log) {
                // Declare private variables
                var currentUser = {}; // Store current user
                var loggedIn = false;

                // Application client ID
                var CLIENT_ID = "replacethiswithclientid";

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

                /**
                 * Encode 'username:password' string into Base64 and attach to
                 * the Authorisation header in the form ->
                 * "Basic [authstring]"
                 * */
                function addAuthHeader(username, password) {
                    var authdata = Base64.encode(username + ':' + password);
                    $http.defaults.headers.common.Authorisation = 'Basic ' + authdata;
                }

                /**
                 * Remove Authorisation header from $http
                 * */
                function removeAuthHeader() {
                    $http.defaults.headers.common.Authorisation = 'Basic ';
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


                var fakeLogin = function () {

                    var response = {};

                    if (password === '1234' && username === 'user') {
                        response = {
                            success: true
                        };

                        currentUser.role = 'user';
                    } else if (password === '1234' && username === 'brand') {
                        response = {
                            success: true
                        };

                        currentUser.role = 'brand';
                    } else if (password === '1234' && username === 'artist') {
                        response = {
                            success: true
                        };

                        currentUser.role = 'artist';
                    } else if (password === '1234' && username === 'label') {
                        response = {
                            success: true
                        };

                        currentUser.role = 'label';
                    } else if (password === '1234' && username === 'admin') {
                        response = {
                            success: true
                        };

                        currentUser.role = 'admin';
                    } else {

                    }

                    if (response.success) {
                        currentUser.username = username;
                        currentUser.password = password;

                        storeSessionCookie(currentUser);
                        addAuthHeader(username, password);

                        loggedIn = true;
                    }

                    callback(response);
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

                    var url = createAuthURL();
                    console.log(url);

                    window.location.replace(url);
                };

                function createAuthURL() {
                    // URI to redirect to after successful login
                    // or token and id-token
                    var response_type = ["token", "id_token"];

                    var scope = ["phone", "email", "address", "openid", "profile"];
                    var redirect_uri = "http://localhost:9000";
                    var nonce = "11edaf9c2907e";
                    var state = "299e3e51d42a0";

                    var identityServer = "http://52.64.240.111:8080/authorize?";

                    var params = "response_type={0}".format( escape(response_type.join(" ")) )
                        + "&client_id={0}".format(CLIENT_ID)
                        + "&scope={0}".format( escape(scope.join("+")) )
                        + "&redirect_url={0}".format( escape(redirect_uri) )
                        + "&nonce={0}".format(nonce)
                        + "&state={0}".format(state);

                    return identityServer + params;
                }

                /**
                 * Remove session cookies with user information,
                 * clean up authorisation header.
                 * */
                var logout = function (callback) {
                    removeAuthHeader();
                    removeSessionCookie();

                    loggedIn = false;
                    currentUser = {};

                    callback();
                    $window.location.href = '/login';
                };

                /**
                 * Check if string of roles has user role in it.
                 * For example:
                 * For user => match('user,admin,label', 'user') will return true
                 *
                 * @param string
                 * @param role
                 * @returns {boolean}
                 */
                var match = function (string, role) {

                    // If there is no role, try to match against current user role.
                    if (!role) {
                        if (currentUser.role) {
                            role = currentUser.role;
                        } else {
                            Log.error('auth', 'Match function executed against an empty role with no user.');
                        }
                    }

                    if (string) {
                        var roles = string.split(',');

                        var match = false;

                        for (var j = 0; j < roles.length; j++) {
                            // Remove spaces
                            roles[j] = roles[j].replace(/\s+/g, '');
                            roles[j] = roles[j].toLowerCase();
                            // Delete empty roles
                            if (roles[j].length < 1) {
                                roles.splice(j, 1);
                            } else {
                                if (role === roles[j]) {
                                    match = true;
                                }
                            }
                        }
                        return match;
                    } else {
                        return false;
                    }
                };

                // Return public api
                return {
                    user: currentUser,
                    isLoggedIn: function () {
                        return loggedIn;
                    },
                    login: login,
                    logout: logout,
                    match: match
                };
            }]);
