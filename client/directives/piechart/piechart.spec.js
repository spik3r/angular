'use strict';

describe('Directive: piechart', function () {

  beforeEach(module('eiFrontend', 'templates'));

  var element, scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element('<piechart></piechart>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should ...', function () {
    expect(1).toBe(1);
  });
});
