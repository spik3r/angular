'use strict';

describe('settings route', function () {

  beforeEach(function () {
    browser.get('/settings');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('SettingsCtrl');
  });

});
