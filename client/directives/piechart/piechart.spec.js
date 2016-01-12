'use strict';

describe('Directive: piechart', function () {

<<<<<<< HEAD
  beforeEach(module('eiFrontend', 'templates'));
=======
  beforeEach(module('ei.console', 'templates'));
>>>>>>> master

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
