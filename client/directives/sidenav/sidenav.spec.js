'use strict';

describe('Sidenav directive', function () {

  beforeEach(module('eiFrontend'));

  beforeEach(module('my.templates'));

  var element, scope, ctrl, sidenavService;

  beforeEach(inject(function ($rootScope, $compile, $controller, _Sidenav_) {

    element = angular.element('<sidenav ng-if="sidenav.active && sidenav.displayed" data-menu="menu"></sidenav>');

    scope = $rootScope;
    sidenavService = _Sidenav_;

    ctrl = $controller('IndexCtrl', {
      $scope: scope
    });

    //$compile(element)(scope);
    //scope.$digest();

    // TODO Elaborate on sidenav directive testing
  }));

  it("should have access to the menu object in the scope", function () {
    expect(scope.menu).not.toBe(undefined);
  });

  it("should be active by default", function () {
    expect(sidenavService.active).toBe(true);
  });

  it("should not be displayed by default", function () {
    expect(sidenavService.displayed).toBe(false);
  });

  it("should switch to unactive using setActive(false)", function () {
    sidenavService.setActive(false);
    expect(sidenavService.active).toBe(false);
  });

  it("should switch back to active using setActive(true)", function () {
    sidenavService.setActive(true);
    expect(sidenavService.active).toBe(true);
  });

  it("should change displayed state to true on show()", function () {
    sidenavService.show();
    expect(sidenavService.displayed).toBe(true);
  });

  it("should change displayed state to false on hide()", function () {
    sidenavService.hide();
    expect(sidenavService.displayed).toBe(false);
  })
});
