'use strict';

describe('channel route', function () {

  beforeEach(function () {
    browser.get('/channel');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ChannelCtrl');
  });

});
