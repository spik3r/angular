///**
// * Created by Kai on 11/11/2015.
// */
//describe('Login controller (LoginCtrl)', function () {
//  var $scope, ctrl, $timeout;
//  var controller;
//
//  beforeEach(function () {
//    module('ei.console');
//
//    inject(function ($rootScope, $controller) {
//      // create a scope object for us to use.
//      $scope = $rootScope.$new();
//
//      // now run that scope through the controller function,
//      // injecting any services or other injectables we need.
//      // **NOTE**: this is the only time the controller function
//      // will be run, so anything that occurs inside of that
//      // will already be done before the first spec.
//      ctrl = $controller('LoginCtrl', {
//        $scope: $scope
//      });
//    });
//
//  });
//
//  it('should exist', function () {
//    expect(ctrl).not.toBe(undefined);
//  });
//
//  it('should provide login function to perform login', function () {
//    expect(ctrl.login).not.toBe(undefined);
//  })
//});
describe('Login box', function () {

  //var greeting = element(by.id('greeting'));
  var userLogin = element(by.css('[ng-model="ctrl.login.username"]'));
  var userPassword = element(by.css('[ng-model="ctrl.login.password"]'));
  var loginButton = element(by.css('[id="login-button"]'));
  var changeGreetingButton = element(by.css('.btn-default'));

  beforeEach(function () {
    browser.get('http://localhost:9000/login');
  });

  it('Username box present', function () {
    expect(userLogin).not.toBe(undefined);
  });
  it('log in', function () {
    //userInput.sendKeys("hello")
   // expect($(userInput)).getText().not.toBe('hello');
    userLogin.sendKeys('admin');
    userPassword.sendKeys('1234');
    loginButton.click();
    browser.manage().timeouts().pageLoadTimeout(10000);  // 10 seconds
    browser.driver.sleep(2000);
    //expect(userLogin.getText()).toEqual('Hi!');
  });
  it('logged in', function () {
    expect(userLogin).not.toBe(undefined);
  });

});
