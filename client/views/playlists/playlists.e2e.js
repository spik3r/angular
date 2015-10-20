'use strict';

describe('playlists route', function () {

  beforeEach(function () {
    browser.get('/playlists');
  });

  it('should have a basic content', function () {
    expect(element.all(by.css('div')).first().getText()).toBe('PlaylistsCtrl');
  });

});
