'use strict';

describe('Directive: followers-age', function () {

<<<<<<< HEAD
  beforeEach(module('eiFrontend', 'templates'));
=======
  beforeEach(module('ei.console', 'templates'));
>>>>>>> master

  var element, scope;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = angular.element('<followers-age></followers-age>');
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should ...', function () {
    expect(1).toBe(1);
  });
});
