'use strict';

describe('content route', function () {

  beforeEach(function () {
    browser.get('/channel/content ');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ContentCtrl');
  });

});
