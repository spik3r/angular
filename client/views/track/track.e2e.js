'use strict';

describe('track route', function () {

  beforeEach(function () {
    browser.get('/dashboard/track');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('TrackCtrl');
  });

});
