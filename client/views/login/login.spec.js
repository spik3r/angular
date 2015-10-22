describe('Login controller (LoginCtrl)', function () {
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
      ctrl = $controller('LoginCtrl', {
        $scope: $scope
      });
    });

  });

  it('should exist', function () {
    expect(ctrl).not.toBe(undefined);
  });

  it('should provide login function to perform login', function () {
    expect(ctrl.login).not.toBe(undefined);
  })
});
