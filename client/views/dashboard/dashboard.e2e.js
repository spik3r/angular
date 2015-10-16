'use strict';

describe('dashboard route', function () {

  beforeEach(function () {
    browser.get('/dashboard');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('DashboardCtrl');
  });

});
