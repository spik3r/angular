'use strict';

describe('Directive: sidenav-item', function () {

  beforeEach(module('eiFrontend', 'templates'));

  var element, scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element('<sidenav-item></sidenav-item>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should ...', function () {
    expect(1).toBe(1);
  });
});
