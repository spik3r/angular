'use strict';

describe('Base64 service', function () {

  beforeEach(module('eiFrontend'));

  var base64Service;

  beforeEach(inject(function () {
    // inject your service for testing.
    // The _underscores_ are a convenience thing
    // so you can have your variable name be the
    // same as your injected service.
    inject(function (_Base64_) {
      base64Service = _Base64_;
    });
  }));

  it('should exist', function () {
    expect(base64Service).not.toBe(undefined);
  });

  it('should encode string "test" to be "dGVzdA=="', function () {
    expect(base64Service.encode('test')).toBe("dGVzdA==");
  });

  it('should decode string "dGVzda==" to be "test"', function () {
    expect(base64Service.decode("dGVzdA==")).toBe("test");
  });

});
