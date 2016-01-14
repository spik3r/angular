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

  //it('should provide proper interface', function () {
  //  expect(authService.user).not.toBe(undefined);
  //  expect(authService.isLoggedIn).not.toBe(undefined);
  //  expect(authService.login).not.toBe(undefined);
  //  expect(authService.logout).not.toBe(undefined);
  //  expect(authService.match).not.toBe(undefined);
  //});

  //it('should match "admin, user, label" string to "user" role', function () {
  //  expect(authService.match("admin, user, label", "user")).toBe(true);
  //});
  //
  //it('should match "Admin, User, Label" string to "user" role', function () {
  //  expect(authService.match("Admin, User, Label", "user")).toBe(true);
  //});
  //
  //it('should not match "Admin, Label" string to "user" role', function () {
  //  expect(authService.match("Admin, Label", "user")).toBe(false);
  //});

});
