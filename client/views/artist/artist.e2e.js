'use strict';

describe('artist route', function () {

  beforeEach(function () {
    browser.get('/dashboard/artist');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('ArtistCtrl');
  });

});
