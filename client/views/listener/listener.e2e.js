'use strict';

describe('listener route', function () {

  beforeEach(function () {
    browser.get('/dashboard/listener');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ListenerCtrl');
  });

});
