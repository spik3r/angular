describe('Index Controllers', function () {
  var $scope, ctrl, $timeout;
  var controller;

  beforeEach(function () {
    module('eiFrontend');

    inject(function ($rootScope, $controller) {
      // create a scope object for us to use.
      $scope = $rootScope.$new();

      // now run that scope through the controller function,
      // injecting any services or other injectables we need.
      // **NOTE**: this is the only time the controller function
      // will be run, so anything that occurs inside of that
      // will already be done before the first spec.
      ctrl = $controller('IndexCtrl', {
        $scope: $scope
      });
    });

  });

  it('should exist', function () {
    expect(ctrl).not.toBe(undefined);
  });

  it('should have access to sidenav object', function () {
    expect($scope.sidenav).not.toBe(undefined);
  });

  it('should provide menu object for sidenav to display', function () {
    expect($scope.menu).not.toBe(undefined);
  });

  it('should have some objects inside menu object', function () {
    expect($scope.menu.length).toBeGreaterThan(0);
  })
});
