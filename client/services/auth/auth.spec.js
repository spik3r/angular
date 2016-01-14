'use strict';

describe('Auth service', function () {

    beforeEach(module('ei.console'));

    var authService;

    beforeEach(inject(function () {
        // inject your service for testing.
        // The _underscores_ are a convenience thing
        // so you can have your variable name be the
        // same as your injected service.
        inject(function (_Auth_) {
            authService = _Auth_;
        });
    }));

    it('should exist', function () {
        expect(authService).not.toBe(undefined);
    });
});
