'use strict';

describe('Directive: slicechart', function () {

<<<<<<< HEAD
  beforeEach(module('eiFrontend', 'templates'));
=======
  beforeEach(module('ei.console', 'templates'));
>>>>>>> master

  var element, scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element('<slicechart></slicechart>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should ...', function () {
    expect(1).toBe(1);
  });
});
