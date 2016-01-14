'use strict';

describe('Sidenav directive', function () {

    beforeEach(module('ei.console'));

    beforeEach(module('my.templates'));

    var element, scope, ctrl, sidenavService;

    beforeEach(inject(function ($rootScope, $compile, $controller, _Sidenav_) {

        element = angular.element('<sidenav ng-if="sidenav.active && sidenav.displayed" data-menu="menu"></sidenav>');

        scope = $rootScope;
        sidenavService = _Sidenav_;

        ctrl = $controller('IndexCtrl', {
            $scope: scope
        });

        // $compile(element)(scope);
        // scope.$digest();

        // TODO Elaborate on sidenav directive testing
    }));
});
