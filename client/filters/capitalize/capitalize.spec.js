'use strict';

describe('capitalize filter', function () {

  beforeEach(module('eiFrontend'));

  var capitalize;

  beforeEach(inject(function ($filter) {
    capitalize = $filter('capitalize');
  }));

  it('should exist', function () {
    expect(1).toBe(1);
  });

  it('should capitalize first letter of every word in the string without parameter', function () {
    expect(capitalize('test string')).toBe('Test String');
  });

  it('should capitalize first letter of the string with the parameter "first"', function () {
    expect(capitalize('test string', 'first')).toBe('Test string');
  });

  it('should capitalize first letter of every word in the string with parameter "all"', function () {
    expect(capitalize('test string', 'all')).toBe('Test String');
  });

});
