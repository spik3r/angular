'use strict';

describe('Auth service', function () {


    beforeEach(module('ei.console'));

    var Auth;

    beforeEach(inject(function (_Auth_) {
        // inject your service for testing.
        // The _underscores_ are a convenience thing
        // so you can have your variable name be the
        // same as your injected service.
        Auth = _Auth_;
    }));

    it('should exist', function () {
        expect(Auth).not.toBe(undefined);
    });

    it('should have access to log service', function () {
        expect(Auth).not.toBe(undefined);
    });

    it('should have authenticate method', function () {
       expect(Auth.authenticate).not.toBe(undefined);
    });
});
