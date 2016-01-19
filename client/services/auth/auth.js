'use strict';

angular.module('ei.console')
    .service('Auth',
        function ($http, $cookies, $timeout, $window, $q, Log) {

            // var self = this;
            var user = {};

            /*
             * OpenID Connect client settings
             * @reference http://openid.net/specs/openid-connect-implicit-1_0.html#RequestParameters
             */
            var OPENID_PROVIDER = 'http://52.64.240.111:8080',
                CLIENT_ID = 'romans-local-client',
                RESPONSE_TYPE = 'token',

                SCOPE = ['openid', 'authorities'],
                REDIRECT_URL = 'http://localhost:9000/authorize',
                // Size of the secret string and its salt
                SECRET_SIZE = 1024,
                // OPTIONAL. Maximum allowable time in seconds since the last time
                // the End-User was actively authenticated by the server.
                // If more time have elapsed, server MUST re-authenticate server on request.
                MAX_AGE = 30,
                // OPTIONAL. string value that specifies how the Authorization Server displays the authentication
                // and consent user interface pages to the End-User.
                DISPLAY = 'page';

            /*
             * Service state container
             */
            var state = {
                current: 0,
                STATES: {
                    SIGNED_OUT: 0,
                    VERIFICATION: 1,
                    VERIFIED: 2,
                    SIGNED_IN: 3
                },
                get: function () {
                    return this.current;
                },
                set: function (state) {
                    this.current = state;
                    Log.debug('auth', 'Changed state to "' + this.name() + '".');
                },
                name: function () {
                    var state;
                    for (state in this.STATES) {
                        if (this.STATES.hasOwnProperty(state) && this.STATES[state] === this.current) {
                            return state;
                        }
                    }
                }
            };

            /*
             * Client secrets dynamic storage.
             * It gets populated on initialization if secrets are found in cookies.
             */
            var storage = {};

            /*
             * Initialize auth service on construction
             * and pick up user secrets from cookies.
             */
            (function __init__ () {
                Log.debug('auth', 'Auth service has been initialized in ' + state.name() + ' state.');

                var cookies = $cookies.getAll();

                if (cookies.state && cookies.nonce) {
                    storage.state = cookies.state;
                    storage.nonce = cookies.nonce;

                    state.set(state.STATES.VERIFICATION);

                    $cookies.remove('state');
                    $cookies.remove('nonce');
                }

                if (cookies.access_token) {
                    storage.access_token = cookies.access_token;
                    Log.debug('auth', 'Found access token in cookies.');

                    state.set(state.STATES.VERIFIED);
                }
            })();

            /**
             * Create authentication query and redirect user
             * to OpenID provider for authentication.
             */
            function authenticate () {
                // Generate random string long enough to be unique, and then take
                // its MD5 to use as a nonce or state values. Store secrets for verification.
                function generateSecret (key) {
                    var secret = '',
                        value;

                    // Generate random entropy string
                    while (secret.length < SECRET_SIZE) {
                        secret += Math.random().toString(36).slice(2);
                    }

                    value = CryptoJS.MD5(secret);
                    Log.debug('auth', 'Random ' + key + ' value generated: ' + value);

                    // Store secret in user storage
                    storage[key] = secret;
                    $cookies.put(key, secret);

                    Log.debug('auth', (key.charAt(0).toUpperCase() + key.slice(1)) + ' secret was salted and stored in user cookies.');

                    return value;
                }
                /*global escape: true */
                var url = OPENID_PROVIDER + '/authorize?';
                // Compile request string:
                url += 'response_type=' + RESPONSE_TYPE;
                url += '&client_id=' + CLIENT_ID;
                // Ignore escape
                url += '&scope=' + escape(SCOPE.join(' '));
                url += '&redirect_uri=' + escape(REDIRECT_URL);
                //  Generate nonce and state values
                url += '&nonce=' + generateSecret('nonce');
                url += '&state=' + generateSecret('state');
                //  Add optional parameters:
                if (MAX_AGE) {
                    url += '&max_age=' + MAX_AGE;
                }
                if (DISPLAY) {
                    url += '&display=' + DISPLAY;
                }

                state.set(state.STATES.VERIFICATION);

                $window.location.href = url;
            }

            /**
             * Validate and Verify received tokens.
             *
             * @param params
             * @returns {boolean}
             */
            function authorize (params) {
                // Validate value using secret from dynamic user storage
                // TODO Refactor expireAfterValidation param
                function validate (key, value) {
                    // Flag to mark if secret should be expired after validation
                    if (storage.hasOwnProperty(key) && storage.key !== null) {

                        if (CryptoJS.MD5(storage[key]).toString() === value) {

                            delete storage[key];
                            $cookies.remove(key);

                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        // Failed to locate value with provided key in the secret storage.
                        Log.error('auth', 'Failed to locate value for ' + key + ' secret.');
                        return false;
                    }
                }

                // Validate ID token using jwt library
                function isIDTokenValid (id_token) {
                    // TODO Add jwt decode library
                    id_token = jwt_decode(id_token);
                    // TODO Handle decode errors

                    // Validate issuer
                    if (id_token.iss !== OPENID_PROVIDER) {
                        Log.error('auth', 'Provided id token issuer did not match provider.');
                        return false;
                    }

                    // Check that aud has client_id only
                    if (id_token.aud !== CLIENT_ID) {
                        Log.error('auth', 'Provided id token audience does not match client id.');
                        return false;
                    }

                    // TODO Verify token hash

                    // Check that current time is before exp date
                    var milliseconds = (new Date()).getTime() / 1000;
                    if (milliseconds >= id_token.exp) {
                        Log.error('auth', 'Provided id token has already expired.');
                        return false;
                    }

                    // Verify nonce
                    if (!validate('nonce', id_token.nonce)) {
                        Log.error('auth', 'Failed to match nonce secret with id_token nonce value.');
                        return false;
                    }

                    Log.debug('auth', 'ID token validation successful.');
                    return true;
                }

                Log.debug('auth', 'Authorization sequence initialized.');

                if (state.get() === state.STATES.VERIFICATION) {
                    // TODO handle error responses here
                    // Validate state value against value stored in cookies
                    if (params.state && validate('state', params.state)) {

                        if (params.hasOwnProperty('id_token')) {
                            // Validate ID token
                            if (!isIDTokenValid(params.id_token)) {
                                Log.error('auth', 'Failed to verify id_token. Aborting...');
                                return false;
                            }

                            // Use sub to update user.id
                            if (params.id_token.sub) {
                                user.id = params.id_token.sub;
                            }

                            // Token type MUST be Bearer
                            if (params.hasOwnProperty('token_type') && params.token_type !== 'Bearer') {
                                Log.error('auth', 'Access token type must be "Bearer". Aborting...');
                                // Restore empty user
                                user = {};
                                return false;
                            }

                            // Access token must exist
                            // TODO Add hash check for access token
                            if (!params.hasOwnProperty('access_token')) {
                                Log.error('auth', 'Failed to locate access token. Aborting...');
                                // Restore empty user
                                user = {};
                                return false;
                            }

                            Log.debug('auth', 'All tokens successfully validated.');

                            // TODO keep secret only until expiration date
                            storage.access_token = params.access_token;
                            $cookies.put('access_token', params.access_token, {expires: moment().add(params.expires_in, 'seconds').toDate()});

                            state.set(state.STATES.VERIFIED);

                            return true;

                        } else {
                            // TODO Invalid tokens configuration
                            Log.error('auth', 'Invalid token configuration. Cannot authorize.');
                            return false;
                        }
                    } else {
                        Log.error('auth', 'Could not validate state value.');
                        return false;
                    }
                } else {
                    Log.error('auth', 'Service should be in "VERIFICATION" state to authorize.');
                    return false;
                }
            }

            /**
             * Make a query
             *
             * @returns {*}
             */
            function getUserInfo () {
                var error,
                    deferred = $q.defer();

                function setAccessToken (type, token) {
                    $http.defaults.headers.common.Authorization = type + ' ' + token;
                    Log.debug('auth', 'Access token has been set for userinfo request.');
                }

                switch (state.get()) {
                    case state.STATES.SIGNED_IN: {
                        deferred.resolve();
                        break;
                    }

                    case state.STATES.VERIFIED: {

                        if (storage.access_token) {
                            // TODO Use provided type instead of hardcoded one
                            setAccessToken('Bearer', storage.access_token);
                        } else {
                            error = 'Access token has not been found for userinfo call.';
                            Log.error('auth', error);
                            deferred.reject(error);

                            state.set(state.STATES.SIGNED_OUT);
                            break;
                        }

                        var request = $http({
                            method: 'get',
                            url: 'http://52.64.240.111:8080/userinfo'
                        });

                        Log.debug('auth', 'Retrieving user information from provider...');

                        request.then(
                            function success (response) {
                                if (response.data) {
                                    if (response.data.sub && response.data.authorities) {
                                        user.id = response.data.sub;
                                        user.roles = response.data.authorities;

                                        Log.debug('auth', 'Successfully retrieved user information from provider.');

                                        state.set(state.STATES.SIGNED_IN);
                                        deferred.resolve(user);
                                    } else {
                                        error = 'Mismatched userinfo response format.';
                                        state.set(state.STATES.SIGNED_OUT);
                                        Log.error('auth', error);
                                        deferred.reject(error);
                                    }
                                } else {
                                    error = 'User info response does not contain data.';
                                    state.set(state.STATES.SIGNED_OUT);
                                    Log.error('auth', error);
                                    deferred.reject(error);
                                }
                            },
                            function failed () {
                                error = 'Failed to retrieve userinfo data';
                                state.set(state.STATES.SIGNED_OUT);
                                Log.error('auth', error);
                                deferred.reject(error);
                            }
                        );

                        break;
                    }

                    case state.STATES.VERIFICATION:
                    case state.STATES.SIGNED_OUT:
                        error = 'Auth controller is in invalid state to make userinfo call';
                        Log.error("login", error);
                        deferred.reject(error);
                        break;
                }

                return deferred.promise;
            }

            function logout () {
                delete storage.access_token;
                delete storage.nonce;
                delete storage.state;

                $cookies.remove('access_token');
                $cookies.remove('nonce');
                $cookies.remove('state');

                state.set(state.STATES.SIGNED_OUT);
            }

            // Return public api
            return {
                user: user,
                state: state,
                authenticate: authenticate,
                authorize: authorize,
                getUserInfo: getUserInfo,
                logout: logout
            };
        });
